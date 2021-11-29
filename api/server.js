const express = require('express')
const { getSystemErrorMap } = require('util')
const Dog = require('./dog-model')
// IMPORTS AT THE TOP


// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE
server.use(express.json())

// ENDPOINTS
server.get('/hello', (req, res)=>{
    res.json({message: 'hello'})
})
// [GET] / (Hello World endpoint)
server.get('/api/dogs', async (req, res) =>{
Dog.findAll()
.then(dogs =>{
    res.json(dogs)
})
.catch( error =>{
    res.status(500).json({
        message: 'something bad happened',
        error: error.message
        })
    })
})

// [GET] / (Hello World endpoint)
server.get('/api/dogs', async (req, res) =>{
try{
    const dogs = await Dog.findById(req.params.id)
    res.json(dogs)
} catch (error){
    res.status(500).json({
        message: 'error getting all dogs',
        error: error.message
    })
}
})

server.get('/api/dogs/:id', async (req, res)=>{
try{
const dog = await Dog.findById(req.params.id)
res.json(dog)
} catch (error){
    res.status(500).json({
        message: 'error getting dog by id',
        error: error.message
    })
}
})

server.post('/api/dogs', async (req, res)=>{
    try{
       const newDog = await Dog.create(req.body)
       res.status(201).json(newDog)
        } catch (error){
            res.status(500).json({
                message: 'error posting new dog',
                error: error.message
            })
        }
        })


// [GET] /api/dogs (R of CRUD, fetch all dogs)
// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)
// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server