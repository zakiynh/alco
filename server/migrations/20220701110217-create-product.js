"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            keterangan: {
                type: Sequelize.STRING,
            },
            nama_produk: {
                type: Sequelize.STRING,
            },
            lebar: {
                type: Sequelize.FLOAT,
            },
            tinggi: {
                type: Sequelize.FLOAT,
            },
            set: {
                type: Sequelize.STRING,
            },
            diskon: {
                type: Sequelize.INTEGER,
            },
            jenis: {
                type: Sequelize.STRING,
            },
            harga: {
                type: Sequelize.INTEGER,
            },
            total: {
                type: Sequelize.INTEGER,
            },
            project_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Projects",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    },
};
