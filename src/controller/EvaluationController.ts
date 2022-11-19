import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { EvaluationService } from "../service";
import { EvaluationCreateDTO } from "../interfaces/evaluation/EvaluationCreateDTO";

// const createEvaluation = async (req: Request, res: Response) => {
//     const {fromId, toId, rate} = req.body;
//     console.log(fromId, toId, rate)

//     //fromId ,toId가 없으면 
//     if (!fromId || !toId) {
//         return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
//     }
 
//      //result길이가 4가 아니면  없으면 
//      if (rate.length !== 4) {
//         return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
//     }

//     //평가 생성 
//     const createEvaluation = await EvaluationService.createEvaluation(+fromId, +toId, rate);
//     return res.status(200).json({ status: 200, success:true,message: "평가 입력 성공 " });

//   };


const createEvaluation = async (req: Request, res: Response) => {
  try {
    const evaluationCreateDTO: EvaluationCreateDTO = req.body;

    const data = await EvaluationService.createEvaluation(evaluationCreateDTO);

    if (!data) {
      return res
        .status(sc.BAD_REQUEST)
        .send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }
    return res
      .status(sc.CREATED)
      .send(success(sc.CREATED, rm.CREATE_USER, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};


const EvaluationController = {createEvaluation};

export default EvaluationController;
