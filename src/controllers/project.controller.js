const projectService = require('./../services/project.service.js');

class ProjectController {
    async getOne(req, res) {
        const data = await projectService.getOne(req.params.id);
        res.send(data);
    };

    async getAll(req, res) {
        const data = await projectService.getAll();
        res.send(data);
    };

    async create(req, res) {
        res.send("Добавление проекта");
    }

    async update(req, res) {
        res.send("Добавление проекта");
    }

    async delete(req, res) {
        res.send("Добавление проекта");
    }
}

module.exports = new ProjectController();