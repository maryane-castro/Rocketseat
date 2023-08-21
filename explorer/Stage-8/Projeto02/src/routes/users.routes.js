// importações
const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

// inicializações
const usersRoutes = Router()
const usersController = new UsersController()




// urls
usersRoutes.get("/", usersController.create)



// exportação
module.exports = usersRoutes;