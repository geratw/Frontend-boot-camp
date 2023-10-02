"use strict";
const { DataTypes, Sequelize } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "User",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        orders: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          foreignKey: true,
        },
        role: {
          type: Sequelize.STRING,
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  },
};
