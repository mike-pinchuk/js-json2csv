import { Router, Request, Response } from 'express'

const route = Router()

const mainPage = (app: Router) => {
    app.use('/', route)
    route.get('/', (req: Request, res: Response) => {
        return res.send('It is works').status(200)
    })
}

export default mainPage