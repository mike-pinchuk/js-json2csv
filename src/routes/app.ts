import { Router, Request, Response } from 'express'

const appRoute = (app: Router) => {
    app.get('/', (req: Request, res: Response) => {
        return res.send('It is works').status(200)
    })
}

export default appRoute