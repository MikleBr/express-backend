const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const projectRouter = require("./routes/project.router.js");

app.use("/projects", projectRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});