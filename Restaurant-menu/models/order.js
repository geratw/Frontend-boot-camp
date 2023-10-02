"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Menuitem }) {
      this.belongsTo(User, { foreignKey: "items", as: "item", onDelete: "SET NULL", onUpdate: "CASCADE" });
      this.hasMany(Menuitem, { foreignKey: "menuitems", as: "menuitem", onDelete: "SET NULL", onUpdate: "CASCADE" });
    }
  }
  Order.init(
    {
      isActive: Sequelize.BOOLEAN,
      items: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        foreignKey: true,
      },
    },
    {
      sequelize,
      modelName: "Order",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Order;
};
