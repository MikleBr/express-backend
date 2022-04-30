class ProjectRepository {
    constructor(dao) {
        this.dao = dao
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM projects WHERE id = ?`,
            [id])
    }

    getAll() {
        return this.dao.all(`SELECT * FROM projects`)
    }

    create(name, description) {
        return this.dao.run(
            'INSERT INTO projects (name, description) VALUES (?, ?)',
            [name, description])
    }

    update(project) {
        const { id, name } = project
        return this.dao.run(
            `UPDATE projects SET name = ? WHERE id = ?`,
            [name, id]
        )
    }

    delete(id) {
        return this.dao.run(
            `DELETE FROM projects WHERE id = ?`,
            [id]
        )
    }
}

module.exports = ProjectRepository;