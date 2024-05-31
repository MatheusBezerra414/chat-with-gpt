
import readlineSync from "readline-sync";
import { getChatResponse } from "./service/getChatResponse.service";


async function chat() {
  console.log("Bem-vindo ao ChatBot CLI usando ChatGPT");

  while (true) {
    const input = readlineSync.question("Você: ");
    if (input.toLowerCase() === "sair") {
      console.log("Até mais.");
      break;
    }
    const res = await getChatResponse(input);
    console.log(`Chat: ${res}`);
  }
}

chat();
