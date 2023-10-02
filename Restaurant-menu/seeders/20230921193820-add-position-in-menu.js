"use strict";
const { DataTypes } = require("sequelize");
const MenuItem = require("../models/menuitem");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Menuitem",
      [
        {
          id: 1,
          title: "Assorted vodka",
          cost: 1350,
          callQuantity: 5,
          description:
            "sandwich with herring, lightly salted mackerel, pickled mushrooms, smoked brisket, pork, pickled cucumbers, chopped bacon, tomato with cheese, eggplant coils, red cabbage salad",
          picture: "../images/pod-vod.jpeg",

        },
        {
          id: 2,
          title: "Meat plate",
          cost: 990,
          callQuantity: 2,
          description:
            "gastronomy of own production: pork, roast beef, ham, Ukrainian sausage with cheese; chorizo salami, turkey fillet with lightly salted cucumbers and garlic baguette",
          picture: "../images/Myas.jpeg",

        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menuitem", null, {});
  },
};
