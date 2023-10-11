import type IArea from './area.interface'

export default interface IEmployee {
    _id: string
    name: string
    dni: number
    birthday: string
    developer: boolean
    description: string
    area_id: IArea
}
