import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, ".", "");
	return {
		server: {
			port: 3000,
			host: "0.0.0.0",
			proxy: {
				// Проксируем /api на локальный сервер разработки (порт 4000)
				"/api": {
					target: "http://localhost:4000",
					changeOrigin: true,
					secure: false,
				},
			},
		},
		plugins: [
			react(),
			tailwindcss(), // <-- Added tailwindcss plugin
		],
		// Убираем экспонирование GEMINI_API_KEY в клиентский бандл.
		define: {},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "."),
			},
		},
	};
});
