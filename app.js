const express = require('express')
const app = express()
const cors = require('cors')

const knex = require('knex')
const connection = require('./knexfile.js')['development']
const database = knex(connection)

app.use(cors())
app.use(express.json())

app.get('/dogs', (request, response) => {
    database('dogs').select()
        .then(dogs => {
            response.json({ dogs })
        })
})

app.get('/dogs/:id', (request, response) => {
    database('dogs').select().where({ id: request.params.id }).first()
        .then( dog => response.send(dog))
})

app.post('/dogs', (request, response) => {
    const dog = request.body
    console.log(dog)
    database('dogs')
        .insert(dog)
        .returning('*')
        .then(dog => response.send(dog))
})


const port = 5000

app.listen(port, () => {
    console.log(`listening to ${port}`)
})

