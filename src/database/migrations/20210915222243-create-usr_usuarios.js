'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('usr_usuarios', {
      usr_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usr_login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      usr_senha: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      usr_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      usr_tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      usr_priv_admin: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      grupo_id: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      usr_status: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }, 
      updated_at: {
        type: DataTypes.DATEONLY,
        allowNull: false,
     },    
  });

},

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('usr_usuarios');

  }
};
