"use strict";
const { DataTypes, Sequelize } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Menuitem",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: Sequelize.STRING,
        picture: Sequelize.STRING,
        cost: Sequelize.INTEGER,
        callQuantity: Sequelize.INTEGER,
        description: Sequelize.STRING,
      },
      {
        freezeTableName: true,
        timestamps: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Menuitem");
  },
};
