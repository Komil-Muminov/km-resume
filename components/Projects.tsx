import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { ExternalLink, Github } from "lucide-react";

export const Projects: React.FC = () => {
	return (
		<section id="projects" className="w-full py-20 md:py-32">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-12">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Избранные проекты
						</h2>
						<div className="h-1 w-20 bg-primary rounded-full" />
					</div>
					<a
						href="https://github.com/Komil-Muminov"
						target="_blank"
						rel="noreferrer"
						className="mt-4 md:mt-0 text-primary hover:text-white transition-colors flex items-center gap-2"
					>
						Мой GitHub <Github size={18} />
					</a>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{PROJECTS?.map((project, idx) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.2 }}
							className="group rounded-xl overflow-hidden bg-slate-800/50 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
						>
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<p className="text-slate-400 text-sm mb-4 line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project?.tech?.map((t) => (
										<span
											key={t}
											className="text-xs font-medium text-slate-300 bg-white/5 px-2 py-1 rounded"
										>
											{t}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									{project.link ? (
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
										>
											Посмотреть <ExternalLink size={14} />
										</a>
									) : (
										<span className="flex items-center gap-2 text-sm font-semibold text-slate-500 cursor-not-allowed">
											В разработке <ExternalLink size={14} />
										</span>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
