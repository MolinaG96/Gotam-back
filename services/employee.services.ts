import Employee from '../models/employee'
import type IEmployee from 'interfaces/employee.interface'

const employeeServices = {
    createEmployee: async (employee: IEmployee) => {
        try {
            const newEmployee = new Employee(employee)
            await newEmployee.save()
            return newEmployee
        } catch (error) {
            return console.error('create Employee service error', error)
        }
    },
}

export default employeeServices
