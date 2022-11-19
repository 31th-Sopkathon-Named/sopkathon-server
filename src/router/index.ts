import { Router } from "express";
import EvaluationRouter from "./EvaluationRouter";
import ResultRouter from "./ResultRouter";
import UserRouter from "./UserRouter";
//import MainRouter from "./MainRouter";

const router: Router = Router();

//router.use("/main", MainRouter);
router.use("/main", UserRouter);
router.use("/main", EvaluationRouter);
router.use("/main", ResultRouter);

export default router;
