const express = require("express");
const projectController = require('../controllers/project.controller.js');

const projectRouter = express.Router();

projectRouter.use(express.json())
projectRouter.get("/", projectController.getAll);
projectRouter.get("/:id", projectController.getOne);
projectRouter.put('/:id', projectController.update);
projectRouter.delete('/:id', projectController.delete);
projectRouter.post("/create", projectController.create);

module.exports = projectRouter;