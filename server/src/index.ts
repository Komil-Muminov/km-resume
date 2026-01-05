import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const MONGODB_URI =
	process.env.MONGODB_URI || "mongodb://localhost:27017/km_resume";

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(`Server listening on http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Failed to connect to MongoDB:", err);
		process.exit(1);
	});
