import express from 'express'
import userRouter from './user'
import employeeRouter from './employee'
import areaRouter from './area'

const router = express.Router()

router.use('/user', userRouter)
router.use('/employee', employeeRouter)
router.use('/area', areaRouter)

export default router
