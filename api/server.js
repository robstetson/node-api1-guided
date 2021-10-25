// IMPORTS AT THE TOP
const express = require('express')
const Dog = require('./dog-model')
// INSTANCE OF EXPRESS APP
const server = express()
// GLOBAL MIDDLEWARE
server.use(express.json())
// ENDPOINTS

// [GET] / (Hello World endpoint)
server.get('/', (req, res) => {
  res.json({ message: 'hello, world'})
})

// [GET] /api/dogs (R of CRUD, fetch all dogs)
server.get('/api/dogs', async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: `Argh!!! ${error.message}`})
  }
})
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server