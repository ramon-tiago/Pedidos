'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('pro_produtos', {
      pro_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pro_descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pro_valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        
      },
      pro_estoque: {
        type: DataTypes.INTEGER,
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

    return queryInterface.dropTable('pro_produtos');

  }
};
