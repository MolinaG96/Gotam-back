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
    edit_area: async (req: Request, res: Response) => {
        try {
            const areaEdited = await areaServices.editArea(
                req.body._id,
                req.body.area,
                req.body.employees
            )
            if (areaEdited === null) throw new Error('Error editing area')
            res.status(201).send(areaEdited)
        } catch (error) {
            console.error('edit area controller error', error)
            res.sendStatus(500)
        }
    },
    delete_area: async (req: Request, res: Response) => {
        try {
            const areaDeleted = await areaServices.deleteArea(req.params.id)
            if (areaDeleted) {
                res.status(204).send()
            } else {
                res.status(404).send({ message: 'Area not found' })
            }
        } catch (error) {
            console.error('delete area controller error', error)
            res.sendStatus(500)
        }
    },
    get_all_areas: async (_req: Request, res: Response) => {
        try {
            const areas = await areaServices.getAllAreas()
            res.status(200).send(areas)
        } catch (error) {
            console.error('get all areas controller error', error)
            res.sendStatus(500)
        }
    },
    get_area_by_id: async (req: Request, res: Response) => {
        try {
            const area = await areaServices.getAreaById(req.params.id)
            res.status(200).send(area)
        } catch (error) {
            console.error('get area by id controller error', error)
            res.sendStatus(500)
        }
    },
}

export default areaController
