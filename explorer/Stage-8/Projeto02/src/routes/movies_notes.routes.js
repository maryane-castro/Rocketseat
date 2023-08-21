// importações
const { Router } = require("express")
const NotesController = require("../controllers/NotesControllers")

// inicializações
const notesRoutes = Router()
const notesController = new NotesController()




// urls
notesRoutes.get("/", notesController.create)



// exportação
module.exports = notesRoutes;