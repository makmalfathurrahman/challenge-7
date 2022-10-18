"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class player_user extends Model {
    static associate(models) {}
  }
  player_user.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "player_user",
    }
  );
  return player_user;
};
