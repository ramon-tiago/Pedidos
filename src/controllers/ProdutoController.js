const Pro_Produtos = require('../models/Produto')

module.exports = {

    async save(req, res) {
        const pro_id = req.params.id
        const produto = {...req.body}
        if (pro_id) {   
            const Produto = await Pro_Produtos.update(produto, {
                where: {
                    pro_id: pro_id
                }
            })
            res.send(Produto)
        } else {
            const Produto = await Pro_Produtos.create(produto)
            res.send(produto)
        }   
    },

    async index(req, res) {
        if (req.params.id) {
            const produto = await Pro_Produtos.findByPk(req.params.id)
            res.json(produto)
        } else {
            const produtos = await Pro_Produtos.findAll()
            res.json(produtos)
        }       
        
    },

    async delete(req, res) {
        const pro_id = req.params.id
        const produto = await Pro_Produtos.findByPk(pro_id)
        if (!produto) {
            res.send('Gentileza informar um Produto válido para Exclusão')
        } else {
            const deleteProduto = await Pro_Produtos.destroy({
                where: {
                    pro_id: pro_id
                } })
            res.json( produto)
        }
    }


        /*
    const save = async (req, res) => {
        //const produto = {...req.body}
        const produto = {}
        procuto = { id: pro_id, descricao: pro_descricao, valor: pro_valor, quantidadeEstoque: pro_estoque } = req.body
        if (req.params.id) produto.id = req.params.id
    },
    */
}