import { type Request, type Response } from 'express'
import userServices from '../services/user.services'

const userController = {
    signup_user: async (req: Request, res: Response) => {
        try {
            const newUser = await userServices.createUser(req.body)
            res.status(201).send(newUser)
        } catch (error) {
            console.error('sign up user error', error)
            res.sendStatus(500)
        }
    },
}

export default userController
