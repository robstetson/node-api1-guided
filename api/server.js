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
    const dogs = await Dog.findAll() // trip to the db using an async helper function
    res.status(200).json(dogs)
  } catch (error) {
    console.log(error.message) // log statement!!
    res.status(500).json({ message: `Argh!!! ${error.message}`})
  }
})
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', async (req, res) => {
  try {
    // pull that third segment of the path
    // because that is the id we need
    const { id } = req.params
    const dog = await Dog.findById(id)
    if (!dog) {
      res.status(404).json({ message: `dog ${id} not found`})
    }

  } catch (error) {
    res.status(500).json({ message: `Argh!!! ${error.message}`})
  }
})
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server