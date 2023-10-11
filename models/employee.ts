import type IEmployee from '../interfaces/employee.interface'
import mongoose, { Schema } from 'mongoose'

const employeeSchema: Schema = new Schema({
    name: { type: String, required: true },
    dni: { type: Number, required: true },
    description: { type: String, required: true },
    birthday: { type: String, required: true },
    developer: { type: Boolean, required: true },
    area_id: { type: String, required: true },
})

const Employee = mongoose.model<IEmployee>('Employee', employeeSchema)

export default Employee
