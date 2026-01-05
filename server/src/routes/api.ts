import { Router } from "express";
import generateRouter from "./generate";

const router = Router();

router.use("/", generateRouter);

export default router;
