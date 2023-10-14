import { type Request, type Response } from 'express'
import userServices from '../services/user.services'
import User from '../models/user'
import type IToken from '../interfaces/token.interface'

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
    login_user: async (req: Request, res: Response) => {
        try {
            const driver = await User.findOne({ email: req.body.email })

            if (driver === null) throw new Error('Driver not found')

            const isValid = await driver.validatePassword(req.body.password)

            if (!isValid) throw new Error('Incorrect data')

            const { _id, name, email } = driver

            const data: IToken = { _id, name, email }
            const token = await userServices.newToken(data)

            res.status(200).json({
                token,
                user: {
                    _id,
                    email,
                },
            })
        } catch (error) {
            console.error('login user error', error)
            res.sendStatus(500)
        }
    },
}

export default userController
