
const { Router } = require("express")
const UserController = require('../controllers/UserController')

const usersRoutes = Router();







const usersController = new UserController()
usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes;




/*

MIDELLEWARE
function myMidlleware(request, response, next){
    //console.log('midlleware')
    if (!request.body.isAdmin){
        return response.json({message: 'user unauthorized'})
    }
    
    next();   //next chama a procima função(usersController.create)
    
}

usersRoutes.post("/", myMidlleware ,usersController.create)




*/