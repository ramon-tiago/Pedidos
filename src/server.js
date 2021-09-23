const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

require('./database');
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser())
app.use(routes)

let porta = 3030
app.listen(porta, () => console.log(`BackEnd Pedidos na porta: ${porta} Ok...`))