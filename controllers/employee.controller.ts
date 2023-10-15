import { type Request, type Response } from 'express'
import employeeServices from '../services/employee.services'

const employeeController = {
    create_employee: async (req: Request, res: Response) => {
        try {
            const newEmployee = await employeeServices.createEmployee(req.body)
            res.status(201).send(newEmployee)
        } catch (error) {
            console.error('create employee controller error', error)
            res.sendStatus(500)
        }
    },
    edit_employee: async (req: Request, res: Response) => {
        try {
            const editedEmployee = await employeeServices.editEmployee(
                req.params.id,
                req.body
            )
            if (editedEmployee === null)
                throw new Error('Error editing employee')
            res.status(201).send(editedEmployee)
        } catch (error) {
            console.error('edit employee controller error', error)
            res.sendStatus(500)
        }
    },
    delete_employee: async (req: Request, res: Response) => {
        try {
            const employeeDeleted = await employeeServices.deleteEmployee(
                req.params.id
            )
            if (employeeDeleted) {
                res.status(204).send()
            } else {
                res.status(404).send({ message: 'Employee not found' })
            }
        } catch (error) {
            console.error('delete employee controller error', error)
            res.sendStatus(500)
        }
    },
    get_all_employees: async (_req: Request, res: Response) => {
        try {
            const employees = await employeeServices.getAllEmployee()
            res.status(200).send(employees)
        } catch (error) {
            console.error('get all employees controller error', error)
            res.sendStatus(500)
        }
    },
    get_employee_by_id: async (req: Request, res: Response) => {
        try {
            const employee = await employeeServices.getEmployeeById(
                req.params.id
            )
            res.status(200).send(employee)
        } catch (error) {
            console.error('get employee by id controller error', error)
            res.sendStatus(500)
        }
    },
    get_all_employees_by_area: async (_req: Request, res: Response) => {
        try {
            const employeesByArea =
                await employeeServices.getAllEmployeesByArea()
            res.status(200).send(employeesByArea)
        } catch (error) {
            console.error('get employees by area controller error', error)
            res.sendStatus(500)
        }
    },
}

export default employeeController
