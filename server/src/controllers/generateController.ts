import { Request, Response } from "express";
import { sendMessage, resetSession } from "../services/geminiService";

export const generateController = async (req: Request, res: Response) => {
	try {
		const { message, sessionId } = req.body || {};
		if (!message || typeof message !== "string") {
			return res.status(400).json({ error: "message_required" });
		}

		const result = await sendMessage({ message, sessionId });
		return res.json({ text: result.text, sessionId: result.sessionId });
	} catch (err) {
		console.error("generateController error:", err);
		return res.status(500).json({ error: "server_error" });
	}
};

export const resetController = async (_req: Request, res: Response) => {
	try {
		await resetSession();
		return res.json({ ok: true });
	} catch (err) {
		console.error("resetController error:", err);
		return res.status(500).json({ error: "server_error" });
	}
};
