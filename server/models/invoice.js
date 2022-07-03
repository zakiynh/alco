'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoice.belongsTo(models.Project, {foreignKey: "project_id"});
    }
  }
  Invoice.init({
    inv_code: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    jml_barang: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    diskon: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};