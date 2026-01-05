// Клиентская обёртка: проксирует запросы к серверу, чтобы не хранить
// Gemini API-ключ в браузере. Серверный прокси должен хранить ключ в
// `process.env.GEMINI_API_KEY` и выполнять вызовы к Gemini.

/**
 * Отправляет сообщение на серверный endpoint и возвращает текст ответа.
 */
export const generateChatResponse = async (
	userMessage: string,
): Promise<string> => {
	try {
		const headers: Record<string, string> = {
			"Content-Type": "application/json",
		};
		const serviceToken = (import.meta as any).env?.VITE_SERVICE_TOKEN;
		if (serviceToken) headers["x-service-token"] = serviceToken;

		const sessionId = localStorage.getItem("gemini_session_id") || undefined;

		const res = await fetch("/api/generate", {
			method: "POST",
			headers,
			body: JSON.stringify({ message: userMessage, sessionId }),
		});

		if (!res.ok) {
			const err = await res.text();
			console.error("Server /api/generate error:", err);
			return "Прошу прощения, сейчас я не могу подключиться к серверу. Пожалуйста, напишите Комилжону напрямую в Telegram (@).";
		}

		const data = await res.json();
		if (data.sessionId) {
			try {
				localStorage.setItem("gemini_session_id", data.sessionId);
			} catch (e) {
				// noop
			}
		}

		return (
			data.text || "Извините, я не смог сгенерировать ответ. Попробуйте позже."
		);
	} catch (error) {
		console.error("Network error while calling /api/generate:", error);
		return "Прошу прощения, сейчас я не могу подключиться к серверу. Пожалуйста, напишите Комилжону напрямую в Telegram (@).";
	}
};

/**
 * Запрос на сброс сессии чата на сервере (если сервер реализует хранение сессий).
 */
export const resetChatSession = async (): Promise<void> => {
	try {
		await fetch("/api/reset", { method: "POST" });
		console.log("Запрос на сброс сессии отправлен серверу.");
	} catch (e) {
		console.warn("Не удалось запросить сброс сессии:", e);
	}
};
