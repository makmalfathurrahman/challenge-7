"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class super_admin extends Model {
    static associate(models) {
      super_admin.belongsTo(models.user);
    }
  }
  super_admin.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "super_admin",
    }
  );
  return super_admin;
};
