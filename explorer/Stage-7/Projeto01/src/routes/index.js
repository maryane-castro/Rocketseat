const { Router } = require("express");
const routes =  Router();

const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");  //import users.routes.js
const tagsRoutes = require("./tags.routes");

routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)




module.exports = routes;