import { Router } from "express";
import { UserController } from "../controller";

const router: Router = Router();

router.post("/", UserController.createUser);
// router.post("/match", UserController);

export default router;
