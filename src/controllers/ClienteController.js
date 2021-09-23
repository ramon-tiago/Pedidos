const Cliente = require('../models/Cliente')


module.exports = {
    async save(req, res) {
        const cli_id = req.params.id
        const cliente = req.body
        if (cli_id) {
            const Cli = await Cliente.update(cliente, {
                where: {
                    cli_id: cli_id
                }
            })
            res.json(cliente)
        } else {
            const Cli = await Cliente.create(cliente)
            res.json(Cli)
        }
    },
    async index(req, res) {
        const cli_id = req.params.id
        const cliente = req.body
        if (cli_id) {
            const Cli = await Cliente.findByPk(cli_id)
            res.json(Cli)
        } else {
            const Cli = await Cliente.findAll(cliente)
            res.json(Cli)
        }
    },

    async delete(req,res) {
        const cli_id = req.params.id
        const cliente = await Cliente.findByPk(cli_id)
        if (cli_id) {
            const Cli = await Cliente.destroy({where:{
                cli_id: cli_id
            }})
            res.json(Cli)
        } else {
            res.json('Cliente não localizado.')
        }
    }
}