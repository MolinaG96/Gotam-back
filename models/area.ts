import type IArea from '../interfaces/area.interface'
import mongoose, { Schema } from 'mongoose'

const areaSchema: Schema = new Schema({
    area: { type: String, require: true },
})

const Area = mongoose.model<IArea>('Area', areaSchema)

export default Area
