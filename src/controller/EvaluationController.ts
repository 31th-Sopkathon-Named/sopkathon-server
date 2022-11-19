import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { EvaluationService } from "../service";
import { EvaluationCreateDTO } from "../interfaces/evaluation/EvaluationCreateDTO";


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
      .send(success(sc.CREATED, rm.CREATE_EVALUATION, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};


const EvaluationController = {createEvaluation};

export default EvaluationController;
