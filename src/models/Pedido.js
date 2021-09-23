const {Model, DataTypes} = require('sequelize')


class Pedidos extends Model {
    static init(sequelize){
        super.init({
            ped_id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            ped_totalPedido: DataTypes.DECIMAL,
            cli_id: DataTypes.INTEGER,

        }, {
            sequelize,
            tableName: 'ped_pedidos',
        })
    }
}

    /*
    static associate(models) {
        this.belongsTo(models.Cliente, { foreignKey: 'cli_id', as: 'cliente'} )
    }
    */


module.exports = Pedidos