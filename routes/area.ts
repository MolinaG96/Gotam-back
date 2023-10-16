import express from 'express'
import areaController from '../controllers/area.controller'
import { validateUser } from '../middleware/auth'
const areaRouter = express.Router()

areaRouter.get('/all-areas', validateUser, areaController.get_all_areas)
areaRouter.get('/by/:id', validateUser, areaController.get_area_by_id)
areaRouter.get(
    '/by-employee/:id',
    validateUser,
    areaController.get_area_by_employee_id
)
areaRouter.get(
    '/obtain/by/:area',
    validateUser,
    areaController.get_area_by_area_name
)
areaRouter.post('/new-area', validateUser, areaController.create_area)
areaRouter.put('/edit', validateUser, areaController.edit_area)
areaRouter.put('/edit-area-name', validateUser, areaController.edit_area_name)
areaRouter.delete('/delete/:id', validateUser, areaController.delete_area)

export default areaRouter
