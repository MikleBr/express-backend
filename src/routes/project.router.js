const express = require("express");
const projectController = require('../controllers/project.controller.js');

const projectRouter = express.Router();

projectRouter.get("/", projectController.getAll);
projectRouter.get("/:id", projectController.getOne);
projectRouter.post("/create", projectController.create);
projectRouter.put('/:id', projectController.update);
projectRouter.delete('/:id', projectController.delete);

module.exports = projectRouter;