import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Carrega variáveis de ambiente
dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;

// Verifica se a chave foi fornecida
if (!API_KEY) {
  console.error("Erro: A chave de API não foi encontrada.");
  process.exit(1);
}

// Inicializa o modelo com a chave da API
const genAI = new GoogleGenerativeAI(API_KEY);

// Envia um texto para o modelo Gemini e retorna a resposta
export async function sendTextToGemini(textPrompt) {
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
