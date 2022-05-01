const projectService = require('./../services/project.service.js');

class ProjectController {
    async getOne(req, res) {
        const data = await projectService.getOne(req.params.id);
        console.log(data);
        res.json(data);
    };

    async getAll(req, res) {
        const data = await projectService.getAll();
        res.json(data);
    };

    async create(req, res) {
        const data = await projectService.create(req.body);
        res.json(data);
    }

    async update(req, res) {
        console.log(req.body);
        const data = await projectService.update(req.body);
        res.json(data);
    }

    async delete(req, res) {
        const data = await projectService.delete(req.params.id);
        res.json(data);
    }
}

module.exports = new ProjectController();