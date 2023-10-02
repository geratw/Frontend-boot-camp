"use strict";
const { DataTypes, Sequelize } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Order",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        isActive: {
          type: Sequelize.BOOLEAN,
        },
        items: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          foreignKey: true,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Order");
  },
};
