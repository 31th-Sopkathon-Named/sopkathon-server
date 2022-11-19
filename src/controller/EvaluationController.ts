import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import { EvaluationService } from "../service";

const createEvaluation = async (req: Request, res: Response) => {
    const {fromId, toId, rate} = req.body;
    console.log(fromId, toId, rate)

    //fromId ,toId가 없으면 
    if (!fromId || !toId) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }
 
     //result길이가 4가 아니면  없으면 
     if (rate.length !== 4) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
    }

    //평가 생성 
    const createEvaluation = await EvaluationService.createEvaluation(+fromId, +toId, rate);
    return res.status(200).json({ status: 200, success:true,message: "평가 입력 성공 " });

  };


const EvaluationController = {createEvaluation};

export default EvaluationController;
