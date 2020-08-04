const { Router } = require('express')

const connection = require('./database/connection')

const PlantController = require('./controllers/PlantController')

const routes = Router()

routes.post('/', PlantController.create)
routes.get('/', PlantController.index)

module.exports = routes