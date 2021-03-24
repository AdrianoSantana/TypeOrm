import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import messageResponse from "../../dto/messageResponse";
import IController from "../../Interfaces/IController";
import Class from "../../models/Class";
import ClassRepository from "../../repositories/ClassRepository";
import errorReturn from "../../utils/errorMessageReturn";

export class getClass implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const classRepository = getRepository(Class)
      const data = await classRepository.find()
      return response.status(201)
                      .json(new messageResponse('', false, data))
    } catch (error) {
      return new Promise(resolve => resolve(errorReturn(error, response)))
    }
  }
}

export class getClassByName implements IController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const repository = getCustomRepository(ClassRepository)
      const data = await repository.findByName(request.params.name)
      return response.status(201)
                      .json(new messageResponse('', false, data))
    } catch (error) {
      return new Promise(resolve => resolve(errorReturn(error, response)))
    }
  }
}
