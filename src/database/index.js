const Sequelize = require('sequelize');
const db = require('../config/database');

const connection = new Sequelize(db);

const User = require('../models/User')
const Produto = require ('../models/Produto')
const Cliente = require('../models/Cliente')
const Pedido = require('../models/Pedido')



User.init(connection)
Produto.init(connection)
Cliente.init(connection)

//Cliente.associate(connection.models);
//Pedido.associate(connection.models);

module.exports = connection