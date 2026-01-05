import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateChatResponse } from "../services/geminiService";
import { ChatMessage, SenderType } from "../types";
export const ChatWidget: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			sender: SenderType.AI,
			text: "Привет! Я виртуальный ИИ ассистент Феномен. Спросите меня о навыках, опыте или проектах Комила! 🤖",
		},
	]);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isOpen]);

	const handleSend = async () => {
		if (!input.trim() || isLoading) return;

		const userMessage = input;
		setInput("");
		setMessages((prev) => [
			...prev,
			{ sender: SenderType.USER, text: userMessage },
		]);
		setIsLoading(true);

		const aiResponse = await generateChatResponse(userMessage);

		setMessages((prev) => [
			...prev,
			{ sender: SenderType.AI, text: aiResponse },
		]);
		setIsLoading(false);
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") handleSend();
	};

	return (
		<>
			<AnimatePresence>
				{!isOpen && (
					<motion.button
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsOpen(true)}
						className=" fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer hover:shadow-primary/60 transform transition-all duration-150 ease-in-out border border-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						aria-label="Открыть чат с AI ассистентом"
					>
						<MessageSquare size={24} />
					</motion.button>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 20, scale: 0.95 }}
						className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
					>
						<div className="p-4 from-primary to-secondary flex items-center justify-between text-white shadow-md">
							<div className="flex items-center gap-2">
								<Sparkles size={18} className="text-yellow-300" />
								<span className="font-bold">AI Ассистент</span>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className="text-white/80 hover:text-white transition-colors"
							>
								<X size={20} />
							</button>
						</div>
						<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900 custom-scrollbar">
							{messages.map((msg, idx) => (
								<div
									key={idx}
									className={`flex ${
										msg.sender === SenderType.USER
											? "justify-end"
											: "justify-start"
									}`}
								>
									<div
										className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
											msg.sender === SenderType.USER
												? "bg-primary text-white rounded-br-none"
												: "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none"
										}`}
									>
										{msg.text}
									</div>
								</div>
							))}

							{isLoading && (
								<div className="flex justify-start">
									<div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex items-center gap-2">
										<Loader2 size={16} className="animate-spin text-primary" />
										<span className="text-xs text-slate-400">Думаю...</span>
									</div>
								</div>
							)}
							<div ref={messagesEndRef} />
						</div>
						<div className="p-4 bg-slate-800 border-t border-white/5">
							<div className="relative">
								<input
									type="text"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyDown={handleKeyPress}
									placeholder="Спросите о Комилджоне..."
									className="w-full bg-slate-900 text-white rounded-full pl-4 pr-12 py-3 text-sm border border-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-500"
								/>
								<button
									onClick={handleSend}
									disabled={!input.trim() || isLoading}
									className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary rounded-full text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
								>
									<Send size={16} />
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
