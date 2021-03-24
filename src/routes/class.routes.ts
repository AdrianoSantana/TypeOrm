import { request, response, Router } from 'express'
import routes from '.'
import { getClass, getClassByName } from '../controller/Class/get'
import { ClassPost } from '../controller/Class/post'


const classRouter = Router()

classRouter.post('/', new ClassPost().handle)
classRouter.get('/', new getClass().handle)
classRouter.get('/:name', new getClassByName().handle)

routes.use('/class', classRouter)

export default classRouter
