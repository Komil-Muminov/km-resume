import { GoogleGenAI } from "@google/genai";
import { v4 as uuidv4 } from "uuid";
import ChatSessionModel from "../models/ChatSession";
import { RESUME_CONTEXT } from "@/constants";
type SendParams = { message: string; sessionId?: string };

const apiKey = process.env.GEMINI_API_KEY || "";
if (!apiKey) {
	console.error(
		"ERROR: GEMINI_API_KEY is not set. Please set it in your .env file or environment.",
	);
	process.exit(1);
}

const client = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Ты вежливый HR-ассистент и технический помощник по имени Феномен. Твоя задача — отвечать на вопросы рекрутеров и посетителей сайта по резюме кандидата Комила Муминова.
ДАННЫЕ КАНДИДАТА:
${RESUME_CONTEXT}
Правила:
1. Отвечай исключительно кратко, профессионально и строго по сути вопроса.
2. Если вопрос не о резюме — корректно отклоняй.
3. Не начинай ответ с приветствий, если это не первый ответ в диалоге.
4. Если информации нет — предложи связаться с Комилжоном: Email (itmuminoff@gmail.com).
`;

// Для продакшн лучше хранить сессии в БД и реализовать TTL/очистку.
// Здесь мы сохраняем все сообщения (role: 'user'|'assistant') в MongoDB
// и при каждом запросе формируем контекст из последних N сообщений.
const HISTORY_WINDOW = 8;

export const sendMessage = async ({ message, sessionId }: SendParams) => {
	const sid = sessionId || uuidv4();

	// Найти или создать документ сессии
	let session = await ChatSessionModel.findOne({ sessionId: sid }).exec();
	if (!session) {
		session = await ChatSessionModel.create({ sessionId: sid, messages: [] });
	}

	// Добавляем входящее пользовательское сообщение в историю
	session.messages.push({ role: "user", text: message });
	await session.save();

	// Формируем контекст из последних N сообщений
	const recent = session.messages.slice(-HISTORY_WINDOW);
	const historyText = recent
		.map((m: any) => `${m.role.toUpperCase()}: ${m.text}`)
		.join("\n");

	// Собираем единый запрос для модели, включающий системное поведение и историю
	const prompt = `${SYSTEM_INSTRUCTION}\n\nИстория диалога:\n${historyText}\n\nПожалуйста, ответь кратко и точно на последний запрос пользователя.`;

	const chat = await client.chats.create({
		model: "gemini-2.5-flash-lite",
		config: { systemInstruction: SYSTEM_INSTRUCTION },
	});

	const response = await chat.sendMessage({ message: prompt });

	const assistantText = response.text || "";

	// Сохраняем ответ ассистента
	session.messages.push({ role: "assistant", text: assistantText });
	await session.save();

	return { text: assistantText, sessionId: sid };
};

export const resetSession = async (sessionId?: string) => {
	if (sessionId) {
		await ChatSessionModel.deleteOne({ sessionId }).exec();
	} else {
		await ChatSessionModel.deleteMany({}).exec();
	}
};
