const express = require('express')

const app = express()

app.use(express.json())

require('./routes/routes')(app)

module.exports = app;