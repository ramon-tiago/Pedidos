'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('prp_produtosPedido', {
      prp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pro_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'pro_produtos', key: 'pro_id' },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT', 
        
      },
      ped_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'ped_pedidos', key: 'ped_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',        
      },
      prp_quantidade: {
        type: DataTypes.INTEGER,
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

    return queryInterface.dropTable('prp_produtosPedido');

  }
};
