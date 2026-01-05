import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import apiRouter from "./routes/api";

const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({ windowMs: 60 * 1000, max: 60 });
app.use(limiter);

// Optional service-token protection. If `SERVICE_TOKEN` is set in env,
// clients must send header `x-service-token: <token>` for /api requests.
const serviceToken = process.env.SERVICE_TOKEN;
const apiAuth = (req: any, res: any, next: any) => {
	if (!serviceToken) return next();
	const token = req.header("x-service-token");
	if (!token || token !== serviceToken) {
		return res.status(401).json({ error: "unauthorized" });
	}
	return next();
};

app.use("/api", apiAuth, apiRouter);

app.get("/health", (_req, res) => res.json({ ok: true }));

export default app;
