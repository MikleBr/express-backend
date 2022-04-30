const AppDAO = require("../../dao.js");
const ProjectRepository = require("../repositories/project.repository.js");

const dao = new AppDAO(process.env.DB_PATH);
const projectRepository = new ProjectRepository(dao)

class ProjectService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository
    }

    getAll() {
        return this.projectRepository.getAll();
    }

    getOne(id) {
        return this.projectRepository.getById(id);
    }

    create(project) {
        return this.projectRepository.create(project);
    }
}

module.exports = new ProjectService(projectRepository);