import { UserMatchDTO } from "./../interfaces/user/UserMatchDTO";
import { UserCreateDTO } from "../interfaces/user/UserCreateDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const createUser = async (userCreateDTO:UserCreateDTO) => {
    const data = await prisma.user.create({
        data:{
            nickName:userCreateDTO.nickName,
            phoneNum:userCreateDTO.phoneNum
        }
    });
    const result = {
        "myId":data.id
    }
    return result;
  };

//* 상대방과 매치
const matchTwo = async (userMatchDTO: UserMatchDTO) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        nickName: userMatchDTO.nickName,
        phoneNum: userMatchDTO.phoneNum,
      },
    });

    const data = {
      fromId: userMatchDTO.myId,
      toId: user?.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const UserService = {
  matchTwo,
  createUser
};


export default UserService;
