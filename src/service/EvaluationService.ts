import { PrismaClient } from "@prisma/client";
import { EvaluationCreateDTO } from "../interfaces/evaluation/EvaluationCreateDTO";
const prisma = new PrismaClient();


const createEvaluation = async (evaluationCreateDTO:EvaluationCreateDTO) => {
    const data = await prisma.evaluation.create({
        data:{
            fromId:evaluationCreateDTO.fromId,
            toId:evaluationCreateDTO.toId,
            rate:JSON.stringify(evaluationCreateDTO.rate)
        }
    });
    return data;
  };



const EvaluationService = {
    createEvaluation
};

export default EvaluationService;
