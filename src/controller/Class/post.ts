import { Request, Response } from "express";
import { getRepository } from "typeorm";
import messageResponse from "../../dto/messageResponse";
import IController from "../../Interfaces/IController";
import Class from "../../models/Class";
import errorReturn from "../../utils/errorMessageReturn";

export class ClassPost implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
      try {
        const classRepository = getRepository(Class)
        const data = await classRepository.save(request.body)
        return response.status(201).json(new messageResponse('Classe inserida com sucesso', false, data))
      } catch (error) {
        return new Promise(resolve => resolve(errorReturn(error, response)))
      }
  }
}
