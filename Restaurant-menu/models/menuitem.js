"use strict";
const { Sequelize } = require("sequelize");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Menuitem extends Model {
    static associate({ Order }) {
      this.belongsTo(Order, { foreignKey: "items", onDelete: "SET NULL", onUpdate: "CASCADE" });
    }
  }
  Menuitem.init(
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
      sequelize,
      freezeTableName: true,
      timestamps: false, 
    }
  );
  return Menuitem;
};
