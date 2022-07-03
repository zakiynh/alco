"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Asset extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Asset.init(
        {
            code: DataTypes.INTEGER,
            account_name: DataTypes.STRING,
            type: DataTypes.STRING,
            pos_saldo: DataTypes.STRING,
            pos_laporan: DataTypes.STRING,
            debet: {
              type: DataTypes.INTEGER,
              get() {
                const data = +this.getDataValue('debet')
                return data ? data.toLocaleString("id-ID", {style: "currency", currency: "IDR"}) : null;
              }
            }, 
            credit: {
              type: DataTypes.INTEGER,
              get() {
                const data = +this.getDataValue('credit')
                return data ? data.toLocaleString("id-ID", {style: "currency", currency: "IDR"}) : null;
              }
            },
        },
        {
            sequelize,
            modelName: "Asset",
        }
    );
    return Asset;
};
