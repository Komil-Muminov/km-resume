import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			className="w-full py-20 md:py-32 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden"
		>
			{/* Background decorative circle */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Давайте работать вместе
						</h2>
						<p className="text-slate-400 text-lg mb-10">
							У вас есть проект или вы хотите обсудить frontend-разработку?
							Пишите, я всегда открыт к новым возможностям и сотрудничеству.
						</p>

						<div className="space-y-6">
							<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
								<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
									<Phone size={20} />
								</div>
								<div>
									<p className="text-sm text-slate-400">Телефон / Telegram</p>
									<p className="text-white font-medium">+992 010497800</p>
								</div>
							</div>

							<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
								<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
									<Mail size={20} />
								</div>
								<div>
									<p className="text-sm text-slate-400">Email</p>
									<a
										href="mailto:itmuminoff@gmail.com"
										className="text-white font-medium hover:text-primary transition-colors"
									>
										itmuminoff@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
								<div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
									<MapPin size={20} />
								</div>
								<div>
									<p className="text-sm text-slate-400">Локация</p>
									<p className="text-white font-medium">Душанбе, Таджикистан</p>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="bg-slate-800/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm"
					>
						<form
							className="space-y-6"
							onSubmit={(e) => e.preventDefault()}
						>
							<div>
								<label className="block text-sm font-medium text-slate-400 mb-2">
									Ваше имя
								</label>
								<input
									type="text"
									className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
									placeholder="phenomen"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-400 mb-2">
									Email
								</label>
								<input
									type="email"
									className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
									placeholder="example@gmail.com"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-400 mb-2">
									Сообщение
								</label>
								<textarea
									rows={4}
									className="w-full bg-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
									placeholder="Расскажите о вашем проекте..."
								/>
							</div>
							<button className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2">
								Отправить <Send size={18} />
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
