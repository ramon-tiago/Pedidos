const Pedido = require('../models/Pedido')

module.exports = {
    async save(req, res){
        const ped_id = req.params.id
        const pedido = req.body    
        
        if (ped_id) {
            const Ped = await Pedido.update(pedido, {
                where: {
                    ped_id: ped_id
                }
            })
            return res.json(Ped)
        } else {
            const ped = await Pedido.create(pedido)
            return res.json(pedido)
        }

    },

    async index(req, res){
        const ped_id = req.params.id
        if (ped_id) {
            const pedido = await Pedido.findByPk(ped_id)
            
            res.json(pedido)
        } else {

            const pedido = await Pedido.findAll()
            res.json(pedido)
        }
    },

    async delete(req, res){
        const ped_id = req.params.id
        const pedido = req.body
        if (ped_id) {
            const Ped = await Pedido.findByPk(ped_id)
            return res.json(Ped)
        } else {
            const ped = Pedido.findAll(pedido)
            return res.json(pedido)
        }
    },
}