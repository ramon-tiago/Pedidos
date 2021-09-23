const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProdutoController = require('./controllers/ProdutoController')
const ClienteController = require('./controllers/ClienteController')
const PedidoController = require('./controllers/PedidoController')


routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/produtos', ProdutoController.index)
routes.get('/produtos/:id', ProdutoController.index)
routes.post('/produtos', ProdutoController.save)
routes.put('/produtos/:id', ProdutoController.save)
routes.delete('/produtos/:id', ProdutoController.delete)

routes.get('/clientes', ClienteController.index)
routes.get('/clientes/:id', ClienteController.index)
routes.post('/clientes', ClienteController.save)
routes.put('/clientes/:id', ClienteController.save)
routes.delete('/clientes/:id', ClienteController.delete)


routes.get('/pedidos', PedidoController.index)
routes.get('/pedidos/:id', PedidoController.index)
routes.post('/pedidos', PedidoController.save)
routes.put('/pedidos/:id', PedidoController.save)
routes.delete('/pedidos/:id', PedidoController.delete)



module.exports = routes