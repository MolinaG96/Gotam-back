import express from 'express'
import employeeController from '../controllers/employee.controller'
const employeeRouter = express.Router()

employeeRouter.post('/new-employee', employeeController.create_employee)

export default employeeRouter
