"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Offer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Offer.hasMany(models.Project, {foreignKey: "offer_id"});
        }
    }
    Offer.init(
        {
            kontak_pribadi: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            nama_perusahaan: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            alamat: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                isEmail: true,
            },
            marketing: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
        },
        {
            sequelize,
            modelName: "Offer",
        }
    );
    return Offer;
};
