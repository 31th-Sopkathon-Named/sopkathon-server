import { UserMatchDTO } from "./../interfaces/user/UserMatchDTO";
import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { UserService } from "../service";

//* 상대방과 매치
const matchTwo = async (req: Request, res: Response) => {
  try {
    const userMatchDTO: UserMatchDTO = req.body;

    const data = await UserService.matchTwo(userMatchDTO);

    if (!data) {
      return res
        .status(sc.BAD_REQUEST)
        .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }
    return res
      .status(sc.CREATED)
      .send(success(sc.CREATED, rm.MATCH_TWO_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const UserController = {
  matchTwo,
};

export default UserController;
