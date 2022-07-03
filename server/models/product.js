"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Project, { foreignKey: "project_id" });
            Product.belongsTo(models.Chain, { foreignKey: "chain_id" });
            Product.belongsTo(models.Rollblind, { foreignKey: "rollblind_id" });
        }
    }
    Product.init(
        {
            keterangan: {
                type: DataTypes.STRING,
            },
            nama_produk: {
                type: DataTypes.STRING,
            },
            lebar: {
                type: DataTypes.FLOAT,
            },
            tinggi: {
                type: DataTypes.FLOAT,
            },
            set: {
                type: DataTypes.STRING,
            },
            diskon: {
                type: DataTypes.INTEGER,
            },
            jenis: {
                type: DataTypes.STRING,
            },
            harga: {
                type: DataTypes.INTEGER,
            },
            total: {
                type: DataTypes.INTEGER,
            },
            project_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Project",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
