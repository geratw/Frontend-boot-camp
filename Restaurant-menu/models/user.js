"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: "items", as: "item", onDelete: "SET NULL", onUpdate: "CASCADE" });
    }
  }
  User.init(
    {
      name: Sequelize.STRING,
      orders: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        foreignKey: true,
      },
      role: Sequelize.STRING,
    },
    {
      sequelize,
      freezeTableName: true,
      timestamps: false, 
    }
  );
  return User;
};
