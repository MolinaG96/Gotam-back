import type IArea from '../interfaces/area.interface'
import mongoose, { Schema } from 'mongoose'

const areaSchema: Schema = new Schema({
    area: { type: String, unique: true, require: true },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
            required: true,
            default: [],
        },
    ],
})

const Area = mongoose.model<IArea>('Area', areaSchema)

export default Area
