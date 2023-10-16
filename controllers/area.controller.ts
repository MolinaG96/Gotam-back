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
                req.body.employeeId
            )
            if (areaEdited === null) throw new Error('Error editing area')
            res.status(201).send(areaEdited)
        } catch (error) {
            console.error('edit area controller error', error)
            res.sendStatus(500)
        }
    },
    edit_area_name: async (req: Request, res: Response) => {
        try {
            const areaEdited = await areaServices.editAreaName(
                req.body._id,
                req.body.area
            )
            if (areaEdited === null) throw new Error('Error editing area')
            res.status(201).send(areaEdited)
        } catch (error) {
            console.error('edit area name controller error', error)
            res.sendStatus(500)
        }
    },
    delete_area: async (req: Request, res: Response) => {
        try {
            const areaDeleted = await areaServices.deleteArea(req.params.id)
            if (typeof areaDeleted === 'number' && areaDeleted > 0) {
                res.status(200).send(
                    `Elimine todos los empleados para poder eliminar el area. Empleados restantes: ${areaDeleted}`
                )
            } else if (areaDeleted === true) {
                res.status(204).send()
            } else {
                res.status(404).send({ message: 'Área no encontrada' })
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
    get_area_by_area_name: async (req: Request, res: Response) => {
        try {
            const area = await areaServices.getAreaByAreaName(req.params.area)
            res.status(200).send(area)
        } catch (error) {
            console.error('get area by area name controller error', error)
            res.sendStatus(500)
        }
    },
    get_area_by_employee_id: async (req: Request, res: Response) => {
        try {
            const area = await areaServices.getAreaByEmployeeId(req.params.id)
            res.status(200).send(area)
        } catch (error) {
            console.error('get area by employee id controller error', error)
            res.sendStatus(500)
        }
    },
}

export default areaController
