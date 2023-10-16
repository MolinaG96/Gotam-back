import express from 'express'
import employeeController from '../controllers/employee.controller'
const employeeRouter = express.Router()

employeeRouter.get('/all-employees', employeeController.get_all_employees)
employeeRouter.get('/by/:id', employeeController.get_employee_by_id)
employeeRouter.get('/all-by-area', employeeController.get_all_employees_by_area)
employeeRouter.get('/obtain/by/:dni', employeeController.get_employee_by_dni)
employeeRouter.post('/new-employee', employeeController.create_employee)
employeeRouter.put('/edit-employee/:id', employeeController.edit_employee)
employeeRouter.delete('/delete/:id', employeeController.delete_employee)

export default employeeRouter
