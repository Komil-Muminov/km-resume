import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";
let aiClient: GoogleGenAI | null = null;
const getClient = (): GoogleGenAI => {
	if (!aiClient) {
		aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
	}
	return aiClient;
};

export const generateChatResponse = async (
	userMessage: string,
): Promise<string> => {
	try {
		const client = getClient();
		const response = await client.models.generateContent({
			model: "gemini-2.5-flash-lite",
			contents: userMessage,
			config: {
				systemInstruction: `
         Ты вежливый HR-ассистент и технический помощник по имени Феномен. Твоя задача — отвечать на вопросы рекрутеров и посетителей сайта по резюме кандидата Комила Муминова.
		 Отвечай сразу по сути вопроса, не начиная ответ с приветствий ("Здравствуйте", "Привет" и т.п.), если это не первый ответ в диалоге.
          ДАННЫЕ КАНДИДАТА:
          ${RESUME_CONTEXT}
          
          Правила:
          1. Отвечай кратко, профессионально и от третьего лица (например: "Комилджон знает React..."). 
          2. Если информации нет в резюме, предложи связаться в Telegram (@iamff7) или по почте.
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
		return "Прошу прощения, сейчас я не могу подключиться к серверу. Пожалуйста, напишите Комилджону напрямую в Telegram.";
	}
};
