const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const usuarios = await User.findAll()
        console.log('chegou')
        res.json(usuarios)
    },

    async store(req, res) {
        const { id: usr_id, login: usr_login, senha: usr_senha, email: usr_email, tipo: usr_tipo, priv_admin: usr_priv_admin, grupo_id: grupo_id, status: usr_status,  } = req.body
        const usuarios = await User.creat({usr_id, usr_login, usr_senha, usr_email, usr_tipo, usr_priv_admin, grupo_id, usr_status, })
        res.json(usuarios)
    },

}