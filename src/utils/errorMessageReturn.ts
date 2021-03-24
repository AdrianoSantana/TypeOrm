import { Response } from 'express'
import messageResponse from '../dto/messageResponse'

const errorReturn = (error: Error, response: Response) => {
  console.log({ error })
  return response.status(500).send(new messageResponse('Ocorreu um erro ao processar requisição',true,null ))
}

export default errorReturn
