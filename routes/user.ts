import express from 'express'
import userController from '../controllers/user.controller'
const userRouter = express.Router()

userRouter.post('/signup', userController.signup_user)
userRouter.post('/login', userController.login_user)
userRouter.post('/secret', userController.secret)

export default userRouter
