const { Router } = require("express");
const NotesController = require('../controllers/NotesController');

const notesController = new NotesController();
const notesRoutes = Router();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;




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