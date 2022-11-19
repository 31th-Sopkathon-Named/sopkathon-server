import { Router } from "express";
import EvaluationRouter from "./EvaluationRouter";
import ResultRouter from "./ResultRouter";
import UserRouter from "./UserRouter";

const router: Router = Router();

router.use("/user", UserRouter);
router.use("/evaluation", EvaluationRouter);
router.use("/result", ResultRouter);

export default router;
