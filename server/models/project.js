"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Project.belongsTo(models.Offer, { foreignKey: "offer_id" });
            // Project.hasMany(models.Supplier, { foreignKey: "project_id" });
            Project.hasMany(models.Product, { foreignKey: "project_id" });
            Project.hasMany(models.Invoice, { foreignKey: "project_id" });
        }
    }
    Project.init(
        {
            nama_proyek: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            offer_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
                references: {
                    model: "Offer",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: "on-progress",
            },
        },
        {
            sequelize,
            modelName: "Project",
        }
    );
    return Project;
};
