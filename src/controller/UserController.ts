import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { UserService } from "../service";

const createUser = async (req: Request, res: Response) => {
    const {nickName, phoneNum} = req.body;
    console.log(nickName,phoneNum)
    if (!nickName) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }
    const createUser = await UserService.createUser(nickName, phoneNum);
    return res.status(200).json({ status: 200, success:true,message: "내정보 입력 성공", data:createUser });

  };

const UserController = {
    createUser
};

export default UserController;
