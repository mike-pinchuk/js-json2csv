import { Router, Request, Response } from 'express'

const route = Router()

const secondPage = (app: Router) => {
    app.use('/', route)
    route.get('/second', (req: Request, res: Response) => {
        res.send('This is a second page').status(200)
    })
}

export default secondPage