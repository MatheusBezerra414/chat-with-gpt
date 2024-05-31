import { OpenAI } from "openai";
const apiKey = "sk-proj-GbIxf7bFOXWNbYhFysmKT3BlbkFJkRSu1gsHYRQ00BePmJW3";

const openApi = new OpenAI({
  apiKey: apiKey,
});

export async function getChatResponse(message: string) {
  const stream = await openApi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
    stream: true,
  });
  for await (let chunck of stream) {
    process.stdout.write(chunck.choices[0]?.delta?.content || "");
  }
}
