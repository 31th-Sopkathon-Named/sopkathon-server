import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const createEvaluation = async (fromId: number, toId:number,rate:Array<number>) => {
    const data = await prisma.evaluation.create({
        data:{
            fromId:fromId,
            toId:toId,
            rate:JSON.stringify(rate)
        }
    });
    return data;
  };



const EvaluationService = {
    createEvaluation
};

export default EvaluationService;
