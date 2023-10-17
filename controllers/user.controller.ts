import { type Request, type Response } from 'express'
import userServices from '../services/user.services'
import User from '../models/user'
import type IToken from '../interfaces/token.interface'
import { getTokenData, validateToken } from '../config/token'

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
            const user = await User.findOne({ email: req.body.email })

            if (user === null) throw new Error('user not found')

            const isValid = await user.validatePassword(req.body.password)

            if (!isValid) throw new Error('Incorrect data')

            const { _id, name, email } = user

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
    secret: async (req: Request, res: Response) => {
        try {
            const authorization: string | undefined = req.headers.authorization

            if (authorization === undefined) {
                res.status(401).send('there is no logged user')
                return
            }

            validateToken(authorization)

            const tokenData = getTokenData(req.headers.authorization!).email

            const user = await User.findOne({ email: tokenData })

            if (user === null) throw new Error('User not found')

            const { _id, name, email } = user

            res.status(200).send({
                user: {
                    _id,
                    name,
                    email,
                },
            })
        } catch (error) {
            console.error('Error in user secret', error)
            res.status(500).send('User secret controller error')
        }
    },
}

export default userController
