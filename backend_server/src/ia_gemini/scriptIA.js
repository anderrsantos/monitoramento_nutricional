// Importa a biblioteca oficial da Google para usar o modelo Gemini
import { GoogleGenerativeAI } from "@google/generative-ai";

// Importa e configura variáveis de ambiente a partir do arquivo .env
import dotenv from "dotenv";
dotenv.config();

// Recupera a chave da API do Gemini a partir das variáveis de ambiente
const API_KEY = process.env.GOOGLE_API_KEY;

// Verifica se a chave foi fornecida corretamente
if (!API_KEY) {
  console.error("Erro: A chave de API não foi encontrada.");
  process.exit(1); // Encerra o processo com erro
}

// Inicializa a instância do modelo de IA com a chave da API
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * Envia um prompt de texto para o modelo Gemini e retorna a resposta gerada.
 *
 * @param {string} textPrompt - O texto (prompt) que será enviado para o modelo de IA.
 * @returns {Promise<string>} - A resposta textual gerada pelo modelo Gemini.
 * @throws - Lança um erro caso a API falhe ou não responda corretamente.
 */
export async function sendTextToGemini(textPrompt) {
  // Define o modelo específico a ser utilizado (gemini-2.5-flash)
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  try {
    // Envia o prompt para o modelo e aguarda a resposta
    const result = await model.generateContent(textPrompt);
    const response = await result.response;

    // Extrai e retorna o texto da resposta
    const textOutput = response.text();
    console.log("Resposta do Gemini:", textOutput);
    return textOutput;
  } catch (error) {
    // Trata e exibe erros de comunicação com a API
    console.error("Erro ao enviar texto para a API Gemini:", error);
    throw error;
  }
}
