import Area from '../models/area'
// import type IArea from 'interfaces/area.interface'

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
}

export default areaServices
