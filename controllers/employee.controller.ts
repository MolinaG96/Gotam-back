import { type Request, type Response } from 'express'
import employeeServices from '../services/employee.services'

const employeeController = {
    create_employee: async (req: Request, res: Response) => {
        try {
            const newEmployee = await employeeServices.createEmployee(req.body)
            res.status(201).send(newEmployee)
        } catch (error) {
            console.error('create employee controller', error)
            res.sendStatus(500)
        }
    },
}

export default employeeController
