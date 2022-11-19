import { UserMatchDTO } from "./../interfaces/user/UserMatchDTO";
import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import UserService from "../service/UserService";

//*  내 정보 입력
const createUser = async (req: Request, res: Response) => {
  const { nickName, phoneNum } = req.body;
  console.log(nickName, phoneNum);
  if (!nickName) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }
  const createUser = await UserService.createUser(nickName, phoneNum);
  return res
    .status(200)
    .json({
      status: 200,
      success: true,
      message: "내정보 입력 성공",
      data: createUser,
    });
};

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
  createUser,
};

export default UserController;
