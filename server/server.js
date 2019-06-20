const path = require('path')
const express = require('express')

const apiRoutes = require('./routes/api')

const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use('/api', apiRoutes)
server.get('*', (req, res) => res.sendFile(path.resolve('server', 'public', 'index.html')));

module.exports = server
