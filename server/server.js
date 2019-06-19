const path = require('path')
const express = require('express')

const apiRoutes = require('./routes/api')

const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use('/api', apiRoutes)

module.exports = server
