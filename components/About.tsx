import React from "react";
import { motion } from "framer-motion";
export const About: React.FC = () => {
	return (
		<section id="about" className="w-full py-20 md:py-32 bg-dark relative">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-12"
				>
					<div className="relative group">
						<div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
						<div className="relative rounded-xl overflow-hidden border border-white/10">
							<img
								// src={PROFILE_IMG}v
								src="/public/km.jpg"
								alt="Komil Muminov"
								className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
							/>
						</div>
					</div>
					<div className="space-y-3 self-start">
						<h2 className="text-3xl md:text-4xl font-bold">Обо мне</h2>
						<div className="h-1 w-20 bg-primary rounded-full" />

						<p className="text-slate-400 leading-relaxed">
							Я Frontend-разработчик из Душанбе, увлеченный созданием удобных и
							эстетичных веб-приложений. Имею опыт работы более года, в данный
							момент занимаю позицию младшего специалиста в государственной
							структуре Таджикистана.
						</p>

						<p className="text-slate-400 leading-relaxed">
							Мой путь в IT начался в Северо-Кавказском федеральном университете
							(2015-2019). Я верю в непрерывное обучение:
							<strong className="text-slate-200">
								{" "}
								успешно окончил курс «Frontend-разработчик PRO» в Skillbox
							</strong>
							, а также прошел обучение в Алиф Академии (JavaScript) и Нетологии
							(Python).
						</p>

						<div className="grid grid-cols-2 gap-4 pt-4">
							<div>
								<h4 className="text-white font-semibold">Локация</h4>
								<p className="text-slate-500">Душанбе, Таджикистан</p>
							</div>
							<div>
								<h4 className="text-white font-semibold">Образование</h4>
								<p className="text-slate-500">СКФУ (Информ. системы)</p>
							</div>
							<div>
								<h4 className="text-white font-semibold">Языки</h4>
								<p className="text-slate-500">
									Русский (Родной), Английский (B1)
								</p>
							</div>
							<div>
								<h4 className="text-white font-semibold">Статус</h4>
								<p className="text-emerald-400">Открыт к предложениям</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
