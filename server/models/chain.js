"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Chain extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Chain.belongsToMany(models.Rollblind, { foreignKey: "chain_id", through: "Products" });
        }
    }
    Chain.init(
        {
            name: DataTypes.STRING,
            price: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Chain",
        }
    );
    return Chain;
};
