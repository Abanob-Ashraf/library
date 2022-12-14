import { Router, Request, Response } from 'express'

const routes = Router()

const welcome = async (_req: Request, res: Response) => {
  try {
    return res.status(200).json('welcome To our library 🌍')
  } catch (error) {
    res.status(401).json(error)
  }
}

routes.route('/').get(welcome)

export default routes
