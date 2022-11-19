import { ResultResponseDTO } from "./../interfaces/result/ResultResponseDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getResult = async (
  fromId: number,
  toId: number
): Promise<ResultResponseDTO[] | null> => {
  try {
    const resultList: ResultResponseDTO[] = [];

    const question = [
      "지금 당신에게 가장 중요한 것은?",
      "상대에게 건네고 싶은 것은?",
      "상대에게 낱낱이 알려주고 싶은 것은?",
      "2병을 거의 다 마시니 눈에 들어오는 것은?",
    ];

    const giveEvaluation = await prisma.evaluation.findFirst({
      where: {
        fromId: fromId,
        toId: toId,
      },
    });

    if (!giveEvaluation) return null;
    const receiveEvaluation = await prisma.evaluation.findFirst({
      where: {
        fromId: toId,
        toId: fromId,
      },
    });

    let receiveRate;
    let result;
    for (var i = 0; i < 4; i++) {
      let giveRate = JSON.parse(giveEvaluation.rate)[i];

      if (!receiveEvaluation) {
        receiveRate = null;
        result = null;
      } else {
        receiveRate = JSON.parse(receiveEvaluation.rate)[i];

        let sum = giveRate + receiveRate;

        if (sum >= 2 && sum <= 3) result = 1;
        else if (sum >= 4 && sum <= 5) result = 2;
        else if (sum == 6) result = 3;
        else result = 4;
      }

      const data: ResultResponseDTO = {
        giveRate,
        receiveRate,
        question: question[i],
        result,
      };

      resultList.push(data);
    }

    return resultList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const ResultService = {
  getResult,
};

export default ResultService;
