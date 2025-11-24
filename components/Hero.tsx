import React, { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";
import { motion } from "framer-motion";

const DecryptText = () => {
	const TARGET_TEXT = "PHENOMEN";
	const CYCLES_PER_LETTER = 2;
	const SHUFFLE_TIME = 50;
	const CHARS = "!@#$%^&*():{};|,.<>/?";

	const [text, setText] = useState(TARGET_TEXT);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const scramble = () => {
		let pos = 0;

		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			const scrambled = TARGET_TEXT.split("")
				.map((char, index) => {
					if (pos / CYCLES_PER_LETTER > index) {
						return char;
					}

					const randomCharIndex = Math.floor(Math.random() * CHARS.length);
					const randomChar = CHARS[randomCharIndex];

					return randomChar;
				})
				.join("");

			setText(scrambled);
			pos++;

			if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
				if (intervalRef.current) clearInterval(intervalRef.current);
			}
		}, SHUFFLE_TIME);
	};

	// Trigger on mount
	useEffect(() => {
		scramble();
		// Optional: Scramble periodically or just once
		const autoScramble = setInterval(() => {
			scramble();
		}, 5000); // Re-scramble every 5 seconds for effect

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
			clearInterval(autoScramble);
		};
	}, []);

	return (
		<div className="relative group cursor-pointer" onMouseEnter={scramble}>
			{/* Glow effect behind */}
			<div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-lg blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

			<h1 className="relative font-mono text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 select-none">
				{text}
			</h1>

			{/* Decorative underline */}
			<motion.div
				className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-2"
				initial={{ width: "0%" }}
				animate={{ width: "100%" }}
				transition={{ duration: 1, delay: 0.5 }}
			/>
		</div>
	);
};

export const Hero: React.FC = () => {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark">
			{/* 3D Background Layer (Particles Only) */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
					<ambientLight intensity={0.5} />

					{/* Floating particles for atmosphere */}
					<Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
						<Sparkles
							count={150}
							scale={12}
							size={3}
							speed={0.4}
							opacity={0.4}
							color="#8b5cf6"
						/>
						<Sparkles
							count={50}
							scale={10}
							size={5}
							speed={0.2}
							opacity={0.2}
							color="#3b82f6"
						/>
					</Float>
				</Canvas>
			</div>

			{/* Content Layer */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				{/* Left Column: Intro Text */}
				<div className="text-center lg:text-left order-2 lg:order-1 mt-10 lg:mt-0">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-5 tracking-wide">
							Frontend Разработчик
						</span>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
							Hi, I'm <br />
							<span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
								Komil Muminov.
							</span>
						</h1>
						<p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
							Создаю современные, высокопроизводительные веб-интерфейсы с
							фокусом на React, TypeScript и качественный UX.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<a
								href="#contact"
								className="px-8 py-3.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary/25 flex items-center justify-center"
							>
								Связаться
							</a>
							<a
								href="#projects"
								className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg backdrop-blur-sm transition-all flex items-center justify-center"
							>
								Мои работы
							</a>
						</div>
					</motion.div>
				</div>

				{/* Right Column: PHENOMEN Animation */}
				<div className="order-1 lg:order-2 flex justify-center items-center">
					<DecryptText />
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 10, 0] }}
				transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2"
			>
				<div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
					<div className="w-1 h-2 bg-slate-500 rounded-full" />
				</div>
			</motion.div>
		</section>
	);
};
