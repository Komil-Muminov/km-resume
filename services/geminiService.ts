import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

// --- Глобальные переменные для Singleton и Сессии Чата ---
let aiClient: GoogleGenAI | null = null;
let chatSession: Chat | null = null; // Переменная для хранения сессии чата

/**
 * Инициализирует и возвращает Singleton-экземпляр GoogleGenAI клиента.
 */
const getClient = (): GoogleGenAI => {
	if (!aiClient) {
		aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
	}
	return aiClient;
};

/**
 * Генерирует ответ, используя модель Gemini.
 * При первом вызове создает сессию чата, которая запоминает контекст.
 * * @param userMessage Сообщение пользователя.
 * @returns Ответ от ИИ.
 */
export const generateChatResponse = async (
	userMessage: string,
): Promise<string> => {
	try {
		const client = getClient();
		if (!chatSession) {
			chatSession = client.chats.create({
				model: "gemini-2.5-flash-lite",
				config: {
					systemInstruction: `
			Ты вежливый HR-ассистент и технический помощник по имени Феномен. Твоя задача — отвечать на вопросы рекрутеров и посетителей сайта по резюме кандидата Комила Муминова.
			ДАННЫЕ КАНДИДАТА:
			${RESUME_CONTEXT}
			Правила:
			1. Отвечай **исключительно** кратко, профессионально и **строго по сути** вопроса. Если вопрос неконкретен (например, "привет" или "sda"), попроси прощение и попроси задать конкретный вопрос о навыках или опыте.
			2. Если вопрос не о резюме (например, о погоде, о тебе или о других темах), корректно отклони его, сказав, что ты можешь отвечать только по резюме.
			3. Отвечай сразу по сути вопроса, не начиная ответ с приветствий ("Здравствуйте", "Привет" и т.п.), если это не первый ответ в диалоге.
			4. Если информации нет в резюме, предложи связаться с Комилжоном. Его контакты: Telegram (@iamff7), Email (itmuminoff@gmail.com).
			5. Будь дружелюбен и используй эмодзи умеренно.
		`,
				},
			});
		}
		const response = await chatSession.sendMessage({ message: userMessage });

		return (
			response.text ||
			"Извините, я не смог сгенерировать ответ. Попробуйте позже."
		);
	} catch (error) {
		console.error("Gemini API Error:", error);
		return "Прошу прощения, сейчас я не могу подключиться к серверу. Пожалуйста, напишите Комилжону напрямую в Telegram (@iamff7).";
	}
};

export const resetChatSession = (): void => {
	chatSession = null;
	console.log("Сессия чата сброшена. Начат новый диалог.");
};
