const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex') //package ./node_modules/knex/index.js
const config = require('./knexfile')["development"]
const database = knex(config)


const port = 5000 

app.listen(port, () => {
    console.log(`listening to port ${port} now`)
})




