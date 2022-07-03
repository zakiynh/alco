const { Asset } = require("../models");

class assetController {
    static async getAllAsset(req, res) {
        try {
            const assets = await Asset.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                order: [["account_name", "ASC"]],
            });

            const asset = assets.filter((el) => (el.type === "Bank" || el.type === "Current Asset" || el.type === "Fixed Asset"));
            const liability = assets.filter((el) => (el.type === "Liability" || el.type === "Current Liability"));
            const equity = assets.filter((el) => (el.type === "Equity"));
            const sales = assets.filter((el) => (el.account_name === "Sales"));
            const cogs = assets.filter((el) => (el.type === "Direct Cost" || el.type === "Inventory"));
            const expenses = assets.filter((el) => (el.type === "Expense"));
            const other = assets.filter((el) => (el.account_name === "Other Revenue" || el.account_name === 'Interest Income' || el.type === "Other Income"));

            res.status(200).json({ asset, liability, equity, sales, cogs, expenses, other });
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async getAssetById(req, res) {
        try {
            const { id } = req.params;
            const asset = await Asset.findByPk(id, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            });
            if(!asset) {
                return res.status(404).json({
                    message: "Asset not found",
                })
            }
            res.status(200).json(asset);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
}

module.exports = assetController;
