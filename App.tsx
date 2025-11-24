import React, { Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ChatWidget } from "./components/ChatWidget";

const App: React.FC = () => {
	return (
		<div className="relative min-h-screen w-full overflow-x-hidden bg-dark text-slate-100 selection:bg-primary selection:text-white">
			<Navbar />

			<main className="flex flex-col items-center w-full">
				<Suspense
					fallback={
						<div className="h-screen flex items-center justify-center">
							Loading 3D Assets...
						</div>
					}
				>
					<Hero />
				</Suspense>

				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>

			<footer className="w-full py-6 text-center text-slate-500 text-sm border-t border-slate-800">
				<p>© {new Date().getFullYear()} Komil Muminov. All rights reserved.</p>
			</footer>

			<ChatWidget />
		</div>
	);
};

export default App;
