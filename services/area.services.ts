import type IEmployee from 'interfaces/employee.interface'
import Area from '../models/area'

const areaServices = {
    createArea: async (area: string) => {
        try {
            const newArea = new Area({ area: area.toLowerCase() })
            await newArea.save()
            return newArea
        } catch (error) {
            console.error('createArea service error', error)
            throw error
        }
    },
    editArea: async (id: string, newArea: string, employees: IEmployee[]) => {
        try {
            const editedArea = await Area.findOneAndUpdate(
                { _id: id },
                { area: newArea, $push: { employees: { $each: employees } } },
                {
                    new: true,
                    runValidators: true,
                }
            )
            return editedArea
        } catch (error) {
            console.error('editArea service error', error)
            throw error
        }
    },
    editAreaName: async (id: string, newArea: string) => {
        try {
            const editedArea = await Area.findOneAndUpdate(
                { _id: id },
                { area: newArea },
                {
                    new: true,
                    runValidators: true,
                }
            )
            return editedArea
        } catch (error) {
            console.error('editAreaName service error', error)
            throw error
        }
    },
    deleteArea: async (id: string) => {
        try {
            const area = await Area.findOne({ _id: id })
            if (area != null) {
                if (area.employees.length > 0) {
                    return area.employees.length
                }
            }
            if (area !== null) {
                const result = await Area.deleteOne({ _id: id })
                return result.deletedCount !== 0
            } else {
                throw new Error('Area not found')
            }
        } catch (error) {
            console.error('deleteArea service error', error)
            throw error
        }
    },
    getAllAreas: async () => {
        try {
            const areas = await Area.find()
            return areas
        } catch (error) {
            console.error('getAllAreas service error', error)
            throw error
        }
    },
    getAreaById: async (id: string) => {
        try {
            const areas = await Area.find({ _id: id })
            return areas
        } catch (error) {
            console.error('getAreaById service error', error)
            throw error
        }
    },
    getAreaByEmployeeId: async (id: string) => {
        try {
            const areas = await Area.find()
            const filteredAreas = areas.filter((area) => {
                const foundEmployee = area.employees.some((employee) => {
                    return employee._id.toString() === id.toString()
                })
                return foundEmployee
            })

            if (filteredAreas !== undefined) {
                return filteredAreas[0]
            } else return ''
        } catch (error) {
            console.error('getAreaByEmployeeId service error', error)
            throw error
        }
    },
}

export default areaServices
