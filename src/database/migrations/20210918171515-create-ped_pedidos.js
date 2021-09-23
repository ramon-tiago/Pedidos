'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('ped_pedidos', {
      ped_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      ped_totalPedido: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      cli_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'cli_clientes', key: 'cli_id' },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
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

    return queryInterface.dropTable('ped_pedidos');

  }
};