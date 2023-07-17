
const { Router } = require("express")
const TagsController = require('../controllers/TagsController')

const tagsController = new TagsController();
const tagsRoutes = Router();

tagsRoutes.get("/:user_id", tagsController.index)



module.exports = tagsRoutes;




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