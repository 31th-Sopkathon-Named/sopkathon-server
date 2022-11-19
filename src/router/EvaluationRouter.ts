import { Router } from "express";
import { EvaluationController } from "../controller";

const router: Router = Router();

router.post("/", EvaluationController.createEvaluation);

export default router;
