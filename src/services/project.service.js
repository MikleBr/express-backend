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
        const { name, description } = project
        console.log('create');
        return this.projectRepository.create(name, description);
    }

    update(project) {
        console.log(`update ${project.id}`);
        return this.projectRepository.update(project);
    }

    delete(id) {
        console.log('delete');
        return this.projectRepository.delete(id);
    }
}

module.exports = new ProjectService(projectRepository);