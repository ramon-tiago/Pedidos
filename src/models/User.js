const {Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            usr_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,               
            },
            usr_login: DataTypes.STRING,
            usr_senha: DataTypes.STRING,
            usr_email: DataTypes.STRING,
            usr_tipo: DataTypes.STRING,
            usr_priv_admin: DataTypes.STRING,
            grupo_id: DataTypes.STRING,
            usr_status: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'usr_usuarios'
        })
    }
}

module.exports = User
