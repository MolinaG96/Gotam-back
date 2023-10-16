import { type NextFunction, type Request, type Response } from 'express'
import { validateToken } from '../config/token'

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const authorization: string | undefined = req.headers.authorization

    if (authorization === undefined) {
        res.status(401).json({ error: 'there is no logged user' })
        return
    }

    const user = validateToken(authorization)

    if (typeof user === 'string') {
        res.status(401).json({ error: 'Access denied' })
        return
    }

    next()
}
