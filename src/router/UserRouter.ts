import { Router } from "express";
import { UserController } from "../controller";

const router: Router = Router();

//router.post("/", UserController);
router.post("/match", UserController.matchTwo);

export default router;
