// importações
const { Router } = require("express")
const TagsController = require("../controllers/TagsControllers")

// inicializações
const tagsRoutes = Router()
const tagsController = new TagsController()




// urls
tagsRoutes.get("/", tagsController.create)



// exportação
module.exports = tagsRoutes;