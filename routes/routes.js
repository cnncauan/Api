module.exports = app => {

    const routesController = require('../controllers/routes.controller')

    const router = require('express').Router
    
    app.get('/', routesController.hello)

}