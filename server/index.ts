import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
	console.error(
		"GEMINI_API_KEY is not set. Set it in environment or .env file.",
	);
}

const client = new GoogleGenAI({ apiKey: apiKey || "" });

const app = express();
app.use(cors());
app.use(express.json());

// Базовый rate-limit — настройте под ваши нужды
const limiter = rateLimit({ windowMs: 60 * 1000, max: 30 });
app.use("/api", limiter);

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

app.post("/api/generate", async (req, res) => {
	const { message } = req.body || {};
	if (!message || typeof message !== "string") {
		return res.status(400).json({ error: "message_required" });
	}

	try {
		const chat = client.chats.create({
			model: "gemini-2.5-flash-lite",
			config: { systemInstruction: SYSTEM_INSTRUCTION },
		});

		const response = await (await chat).sendMessage({ message });

		return res.json({ text: response.text });
	} catch (err) {
		console.error("/api/generate error:", err);
		return res.status(500).json({ error: "server_error" });
	}
});

app.post("/api/reset", async (_req, res) => {
	// Если вы хотите хранить сессии на сервере — добавьте логику очистки здесь.
	return res.json({ ok: true });
});

app.listen(PORT, () => {
	console.log(`Gemini proxy server listening on http://localhost:${PORT}`);
});
