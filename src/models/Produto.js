const {Model, DataTypes} = require('sequelize')

class Pro_produtos extends Model {
    static init (sequelize) {
        super.init({
            pro_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,               
            },
            pro_descricao: DataTypes.STRING,
            pro_valor: DataTypes.DECIMAL,
            pro_estoque: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'pro_produtos'
        })
    }

}

module.exports = Pro_produtos
