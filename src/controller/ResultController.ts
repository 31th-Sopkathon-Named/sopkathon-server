import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { success, fail } from "../constants/response";
import ResultService from "../service/ResultService";

const getResult = async (req: Request, res: Response) => {
  try {
    const { fromId, toId } = req.params;
    const data = await ResultService.getResult(+fromId, +toId);

    if (!data) {
      return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    }
    return res.status(sc.OK).send(success(sc.OK, rm.GET_RESULT_SUCCESS, data));
  } catch (error) {
    return res
      .status(sc.INTERNAL_SERVER_ERROR)
      .send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

const ResultController = {
  getResult,
};

export default ResultController;
