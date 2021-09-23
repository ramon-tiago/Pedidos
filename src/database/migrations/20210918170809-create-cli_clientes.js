'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('cli_clientes', {
      cli_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cli_nome: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      cli_tipoPessoa: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      cli_CPF: {
        type: DataTypes.STRING,
        allowNull: true,
        
      },
      cli_CNPJ: {
        type: DataTypes.STRING,
        allowNull: true,
        
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

    return queryInterface.dropTable('cli_clientes');

  }
};
