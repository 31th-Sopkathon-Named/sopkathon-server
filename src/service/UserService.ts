import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (nickName: string, phoneNum:string) => {
    const data = await prisma.user.create({
        data:{
            nickName:nickName,
            phoneNum:phoneNum
        }
    });
    const result = {
        "myId":data.id
    }
    return result;
  };


const UserService = {createUser};

export default UserService;
