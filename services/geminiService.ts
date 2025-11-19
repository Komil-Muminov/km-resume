import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
	if (!aiClient) {
		// process.env.API_KEY is injected in index.tsx for this demo
		aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
	}
	return aiClient;
};

export const generateChatResponse = async (
	userMessage: string,
): Promise<string> => {
	try {
		const client = getClient();

		// Using the recommended model for text tasks
		const response = await client.models.generateContent({
			model: "gemini-2.5-flash",
			contents: userMessage,
			config: {
				systemInstruction: `
          Ты вежливый HR-ассистент и технический помощник. Твоя задача — отвечать на вопросы рекрутеров и посетителей сайта по резюме кандидата Табарова Комилджона.
            
          ДАННЫЕ КАНДИДАТА:
          ${RESUME_CONTEXT}
          
          Правила:
          1. Отвечай кратко, профессионально и от третьего лица (например: "Комилджон знает React..."). 
          2. Если информации нет в резюме, предложи связаться в Telegram (@komilff7) или по почте itmuminoff@gmail.com.
          3. Будь дружелюбен и используй эмодзи умеренно.
        `,
			},
		});

		return (
			response.text ||
			"Извините, я не смог сгенерировать ответ. Попробуйте позже."
		);
	} catch (error) {
		console.error("Gemini API Error:", error);
		return "Прошу прощения, сейчас я не могу подключиться к серверу. Пожалуйста, напишите Комилджону напрямую в Telegram или на почту.";
	}
};
