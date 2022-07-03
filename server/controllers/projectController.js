const { Project } = require("../models");

class projectController {
    static async getProject(req, res) {
        try {
            const projects = await Project.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
            });
            res.status(200).json(projects);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

    static async addProject(req, res) {
        try {
            const { nama_proyek, offer_id, code_project, code } = req.body;
            await Project.create({ nama_proyek, offer_id, code_project, code });
            res.status(201).json({ message: "Project created successfully" });
        } catch (err) {
            console.log("err: ", err);
            res.status(500).json({
                message: err.message,
            })
        }
    }
}

module.exports = projectController;