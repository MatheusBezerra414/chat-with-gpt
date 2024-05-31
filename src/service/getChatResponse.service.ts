import { OpenAI } from "openai";
import {config} from "dotenv"

config()

const apiKey = process.env.OPENAI_API_KEY || "";

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
