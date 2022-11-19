import { Router } from "express";
import { ResultController } from "../controller";

const router: Router = Router();

router.get("/:fromId/:toId", ResultController.getResult);

export default router;
