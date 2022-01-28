const routes = require('express').Router()

routes.use('/vehicles', require('./vehicles'))

module.exports = routes