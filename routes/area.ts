import express from 'express'
import areaController from '../controllers/area.controller'
const areaRouter = express.Router()

areaRouter.post('/new-area', areaController.create_area)

export default areaRouter
