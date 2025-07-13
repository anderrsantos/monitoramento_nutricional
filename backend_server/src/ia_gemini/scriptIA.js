import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
  console.error("Erro: A chave de API não foi encontrada. Certifique-se de que GOOGLE_API_KEY está definida em suas variáveis de ambiente.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function sendTextToGemini(textPrompt) {
  // Use um modelo válido e documentado
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    const result = await model.generateContent(textPrompt);
    const response = await result.response;
    const textOutput = response.text();

    console.log("Resposta do Gemini:", textOutput);
    return textOutput;
  } catch (error) {
    console.error("Erro ao enviar texto para a API Gemini:", error);
    throw error;
  }
}

