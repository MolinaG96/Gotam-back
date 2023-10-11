import type IEmployee from './employee.interface'

export default interface IArea {
    _id: string
    area: string
    employees: IEmployee[]
}
