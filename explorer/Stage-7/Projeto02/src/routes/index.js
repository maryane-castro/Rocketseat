// instanciar o express
const { Router } = require("express")
const routes = Router()

// importar as funções dos outros arquivos
const users = require("./users.routes")
const moviesNotes = require("./movies_notes.routes")
const moviesTags = require("./movies_tags.routes")

// url's de chamada
routes.use("/users", users)
routes.use("/notes", moviesNotes)
routes.use("/tags", moviesTags)


// importando todas as variaveis routes
module.exports = routes

