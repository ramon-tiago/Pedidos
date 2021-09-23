const {Model, DataTypes} = require('sequelize');

class ProdutosPedido extends Model {
    static init(sequelize) {
        super.init({
            prp_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            ped_id: DataTypes.INTEGER,
            prp_quantidade: DataTypes.INTEGER,
            prp_valorUnidade: DataTypes.DECIMAL,
            prp_valorTotal: DataTypes.DECIMAL,
        }, {
            sequelize,
            tablename: 'prp_produtos_pedidos'
        })
    }
}

module.exports = ProdutosPedido