
const { Router } = require("express")
const UserController = require('../controllers/UserController')

const usersRoutes = Router();



function myMidlleware(request, response, next){
    //console.log('midlleware')
    if (request.body.isAdmin){
        next();   //next chama a procima função(usersController.create)
    }

    response.send('não foi possivel')
    
}






const usersController = new UserController()
usersRoutes.post("/", myMidlleware ,usersController.create)


module.exports = usersRoutes;