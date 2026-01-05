import { Router } from "express";
import {
	generateController,
	resetController,
} from "../controllers/generateController";

const router = Router();

router.post("/generate", generateController);
router.post("/reset", resetController);

export default router;
