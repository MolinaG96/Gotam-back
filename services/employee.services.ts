import Employee from '../models/employee'
import type IEmployee from 'interfaces/employee.interface'

const employeeServices = {
    createEmployee: async (employee: IEmployee) => {
        try {
            const newEmployee = new Employee(employee)
            await newEmployee.save()
            return newEmployee
        } catch (error) {
            console.error('createEmployee service error', error)
            throw error
        }
    },
    editEmployee: async (id: string, data: object) => {
        try {
            const updatedEmployee = await Employee.findOneAndUpdate(
                { _id: id },
                { $set: data },
                {
                    new: true,
                    runValidators: true,
                }
            )

            return updatedEmployee
        } catch (error) {
            console.error('editEmployee service error', error)
            throw error
        }
    },
    deleteEmployee: async (id: string) => {
        try {
            const employee = await Employee.findOne({ _id: id })
            if (employee !== null) {
                const result = await Employee.deleteOne({ _id: id })
                return result.deletedCount !== 0
            } else {
                throw new Error('Employee not found')
            }
        } catch (error) {
            console.error('deleteEmployee service error', error)
            throw error
        }
    },
    getAllEmployee: async () => {
        try {
            const employees = await Employee.find()
            return employees
        } catch (error) {
            console.error('getAllEmployee service error', error)
            throw error
        }
    },
    getEmployeeById: async (id: string) => {
        try {
            const employee = await Employee.find({ _id: id })
            return employee
        } catch (error) {
            console.error('getEmployeeById service error', error)
            throw error
        }
    },
    getEmployeesByArea: async (area: string) => {
        try {
            const employees = await Employee.find({ area: area.toLowerCase() })
            return employees
        } catch (error) {
            console.error('getEmployeesByArea service error', error)
            throw error
        }
    },
}

export default employeeServices
