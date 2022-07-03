"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Rollblind extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Rollblind.belongsToMany(models.Chain, { foreignKey: "rollblind_id", through: "Products" });
        }
    }
    Rollblind.init(
        {
            name: DataTypes.STRING,
            product_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Products",
                    key: "id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            },
        },
        {
            sequelize,
            modelName: "Rollblind",
        }
    );
    return Rollblind;
};
