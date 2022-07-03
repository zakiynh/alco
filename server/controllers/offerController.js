const { Offer, Project } = require("../models");

class OfferController {
    static async getAllOffers(req, res) {
        try {
            const offers = await Offer.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                order: [["nama_perusahaan", "ASC"]]
            });
            res.status(200).json(offers);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async getOfferId(req, res) {
        try {
            const { id } = req.params;
            const offer = await Offer.findByPk(id, 
                {include: {
                    model: Project
                }});
            if(!offer) throw { message: "Offer not found" }
            res.status(200).json(offer);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async createOffer(req, res) {
        try {
            const { kontak_pribadi, nama_perusahaan, alamat, email, marketing } = req.body;
            await Offer.create({ kontak_pribadi, nama_perusahaan, alamat, email, marketing });
            res.status(201).json({ message: "Offer created successfully" });
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async updateOffer(req, res) {
        try {
            const { id } = req.params;
            const { kontak_pribadi, nama_perusahaan, alamat, email, marketing } = req.body;
            const offer = await Offer.findByPk(id);
            if(!offer) throw { message: "Offer not found" }
            await Offer.update({ kontak_pribadi, nama_perusahaan, alamat, email, marketing }, { where: { id } });
            res.status(200).json({ message: "Offer updated successfully" });
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async deleteOffer(req, res) {
        try {
            const { id } = req.params;
            const offer = await Offer.findByPk(id);
            if(!offer) throw { message: "Offer not found" }
            await Offer.destroy({ where: { id } });
            res.status(200).json({ message: "Offer deleted successfully" });
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
}

module.exports = OfferController;
