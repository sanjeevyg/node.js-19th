const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex') //package ./node_modules/knex/index.js
const config = require('./knexfile')["development"]
const database = knex(config)



app.get('/dogs', (request, response) => {
    database('dogs').select()
            .then(dogs => {
                response.json({ dogs })     
            })
})

app.get('/dogs/:id', (request, response) => {
    database('dogs').select().where({ id: request.params.id }).first()
        .then(dog => {
            response.json({ dog })
        })
})

app.get('/dogs', (request, response) => {
    dog = body.request 
    database('dogs')
        .insert()
        .returning('*')
        .then(dog => response.send(dog))
})



const port = 5000 

app.listen(port, () => {
    console.log(`listening to port ${port} now`)
})




