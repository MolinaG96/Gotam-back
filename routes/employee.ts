import express from 'express'
import employeeController from '../controllers/employee.controller'
import { validateUser } from '../middleware/auth'
const employeeRouter = express.Router()

employeeRouter.get(
    '/all-employees',
    validateUser,
    employeeController.get_all_employees
)
employeeRouter.get(
    '/by/:id',
    validateUser,
    employeeController.get_employee_by_id
)
employeeRouter.get(
    '/all-by-area',
    validateUser,
    employeeController.get_all_employees_by_area
)
employeeRouter.get(
    '/obtain/by/:dni',
    validateUser,
    employeeController.get_employee_by_dni
)
employeeRouter.post(
    '/new-employee',
    validateUser,
    employeeController.create_employee
)
employeeRouter.put(
    '/edit-employee/:id',
    validateUser,
    employeeController.edit_employee
)
employeeRouter.delete(
    '/delete/:id',
    validateUser,
    employeeController.delete_employee
)

export default employeeRouter
