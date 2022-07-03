const { Invoice } = require("../models");

class invoiceController {
    static async getAllInvoices(req, res) {
        try {
            const invoices = await Invoice.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                order: [["createdAt", "ASC"]],
            });
            res.status(200).json(invoices);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async createInvoice(req, res) {
        try {
            const { inv_code, nama_barang, jml_barang, unit, harga, diskon, project_id } = req.body;
            const invoice = await Invoice.create({
                inv_code,
                nama_barang,
                jml_barang,
                unit,
                harga,
                diskon,
                project_id,
            });
            res.status(201).json(invoice);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
}

module.exports = invoiceController;
