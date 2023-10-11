import express from 'express'
import areaController from '../controllers/area.controller'
const areaRouter = express.Router()

areaRouter.get('/all-areas', areaController.get_all_areas)
areaRouter.get('/:id', areaController.get_area_by_id)
areaRouter.post('/new-area', areaController.create_area)
areaRouter.put('/edit', areaController.edit_area)
areaRouter.delete('/delete/:id', areaController.delete_area)

export default areaRouter
