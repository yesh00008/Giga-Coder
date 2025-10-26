"use server";

import { getPrisma } from "@/lib/prisma";
import {
  getMainCodingPrompt,
  screenshotToCodePrompt,
  softwareArchitectPrompt,
} from "@/lib/prompts";
import { notFound } from "next/navigation";
import Together from "together-ai";

export async function createChat(
  userPrompt: string,
  selectedModel: string,
  generationQuality: "high" | "low",
  imageReference: string | undefined,
) {
  const databaseClient = getPrisma();
  const chatSession = await databaseClient.chat.create({
    data: {
      model: selectedModel,
      quality: generationQuality,
      prompt: userPrompt,
      title: "",
      shadcn: true,
    },
  });

  const aiClientConfig: ConstructorParameters<typeof Together>[0] = {};
  if (process.env.HELICONE_API_KEY) {
    aiClientConfig.baseURL = "https://together.helicone.ai/v1";
    aiClientConfig.defaultHeaders = {
      "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
      "Helicone-Property-appname": "GigaCoder",
      "Helicone-Session-Id": chatSession.id,
      "Helicone-Session-Name": "GigaCoder Chat",
    };
  }

  const aiClient = new Together(aiClientConfig);

  const generateChatTitle = async () => {
    const titleResponse = await aiClient.chat.completions.create({
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant creating concise chat titles. Generate a brief title (3-5 words maximum) that captures the essence of the user's app creation request. Return only the title text.",
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });
    return titleResponse.choices[0].message?.content || userPrompt;
  };

  const findMatchingExample = async () => {
    const exampleMatchResponse = await aiClient.chat.completions.create({
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      messages: [
        {
          role: "system",
          content: `You are an intelligent classifier. Match the user's app request to the most similar example category. If no match exists, respond with "none". Available categories:

          - landing page
          - blog app
          - quiz app
          - pomodoro timer
          
          Respond ONLY with one category name or "none".`,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    const matchedExample =
      exampleMatchResponse.choices[0].message?.content || "none";
    return matchedExample;
  };

  const [chatTitle, similarExample] = await Promise.all([
    generateChatTitle(),
    findMatchingExample(),
  ]);

  let screenshotDescription;
  if (imageReference) {
    const visionResponse = await aiClient.chat.completions.create({
      model: "Qwen/Qwen2.5-VL-72B-Instruct",
      temperature: 0.2,
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: screenshotToCodePrompt },
            {
              type: "image_url",
              image_url: {
                url: imageReference,
              },
            },
          ],
        },
      ],
    });

    screenshotDescription = visionResponse.choices[0].message?.content;
  }

  let finalUserMessage: string;
  if (generationQuality === "high") {
    const architectResponse = await aiClient.chat.completions.create({
      model: "Qwen/Qwen2.5-Coder-32B-Instruct",
      messages: [
        {
          role: "system",
          content: softwareArchitectPrompt,
        },
        {
          role: "user",
          content: screenshotDescription
            ? screenshotDescription + userPrompt
            : userPrompt,
        },
      ],
      temperature: 0.2,
      max_tokens: 3000,
    });

    finalUserMessage = architectResponse.choices[0].message?.content ?? userPrompt;
  } else if (screenshotDescription) {
    finalUserMessage =
      userPrompt +
      " RECREATE THIS APP AS CLOSELY AS POSSIBLE: " +
      screenshotDescription;
  } else {
    finalUserMessage = userPrompt;
  }

  const updatedChat = await databaseClient.chat.update({
    where: {
      id: chatSession.id,
    },
    data: {
      title: chatTitle,
      messages: {
        createMany: {
          data: [
            {
              role: "system",
              content: getMainCodingPrompt(similarExample),
              position: 0,
            },
            { role: "user", content: finalUserMessage, position: 1 },
          ],
        },
      },
    },
    include: {
      messages: true,
    },
  });

  const latestMessage = updatedChat.messages
    .sort((a: any, b: any) => a.position - b.position)
    .at(-1);
  if (!latestMessage) throw new Error("No new message");

  return {
    chatId: chatSession.id,
    lastMessageId: latestMessage.id,
  };
}

export async function createMessage(
  chatId: string,
  text: string,
  role: "assistant" | "user",
) {
  const prisma = getPrisma();
  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    include: { messages: true },
  });
  if (!chat) notFound();

  const maxPosition = Math.max(...chat.messages.map((m) => m.position));

  const newMessage = await prisma.message.create({
    data: {
      role,
      content: text,
      position: maxPosition + 1,
      chatId,
    },
  });

  return newMessage;
}
