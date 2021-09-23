const {Model, DataTypes, ForeignKeyConstraintError } = require('sequelize')

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            cli_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,    
            },
            cli_nome: DataTypes.STRING,
            cli_tipo_pessoa: DataTypes.STRING,
            cli_cpf: DataTypes.STRING,
            cli_cnpj: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'cli_clientes'
        })
    }

    static associate(models) {
        this.hasMany(models.Pedido, {foreignKey: 'cli_id', as: 'Pedido'})
    }
}

module.exports = Cliente