import { type Request, type Response } from 'express'
import areaServices from '../services/area.services'

const areaController = {
    create_area: async (req: Request, res: Response) => {
        try {
            const newArea = await areaServices.createArea(req.body.area)
            res.status(201).send(newArea)
        } catch (error) {
            console.error('create area controller error', error)
            res.sendStatus(500)
        }
    },
}

export default areaController
