import type IArea from '../interfaces/area.interface'
import Area from '../models/area'
import Employee from '../models/employee'
import type IEmployee from '../interfaces/employee.interface'

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
    editEmployee: async (
        id: string,
        data: object,
        newArea: string,
        oldArea: string
    ) => {
        try {
            if (newArea !== oldArea) {
                const editOldArea = await Area.findOne({ area: oldArea })
                if (editOldArea != null) {
                    editOldArea.employees = editOldArea.employees.filter(
                        (employee) => employee._id.toString() !== id
                    )
                    await editOldArea.save()

                    await Area.findOneAndUpdate(
                        { area: newArea },
                        { $push: { employees: id } },
                        { new: true }
                    )
                }
            }

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
    deleteEmployee: async (id: string, area: IArea) => {
        try {
            const employeeArea = await Area.findOne({ _id: area._id })
            if (employeeArea != null) {
                employeeArea.employees = employeeArea.employees.filter(
                    (employee) => employee._id.toString() !== id
                )

                await employeeArea.save()
            }
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
            const employee = await Employee.findOne({ _id: id })

            return employee
        } catch (error) {
            console.error('getEmployeeById service error', error)
            throw error
        }
    },
    getEmployeeByDni: async (dni: number) => {
        try {
            const employee = await Employee.findOne({ dni })

            return employee
        } catch (error) {
            console.error('getEmployeeByDni service error', error)
            throw error
        }
    },
    getAllEmployeesByArea: async () => {
        try {
            const areas = await Area.find().populate('employees')
            const areasWithEmployees = areas.filter(
                (area) => area.employees.length > 0
            )

            return areasWithEmployees
        } catch (error) {
            console.error('getAllEmployeesByArea service error', error)
            throw error
        }
    },
}

export default employeeServices
