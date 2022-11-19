import { UserMatchDTO } from "./../interfaces/user/UserMatchDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//*  내 정보 입력
const createUser = async (nickName: string, phoneNum: string) => {
  const data = await prisma.user.create({
    data: {
      nickName: nickName,
      phoneNum: phoneNum,
    },
  });
  const result = {
    myId: data.id,
  };
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
      toId: user.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const UserService = {
  matchTwo,
  createUser,
};

export default UserService;
