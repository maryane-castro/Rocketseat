require('express-async-errors')


const AppError = require('./utils/AppError')
const express = require("express");
const routes = require("./routes")
const migrationsRun = require("./database/sqlite/migrations")

migrationsRun();
const app = express();
app.use(express.json())
app.use(routes)


app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status : "error",
            message : error.message
        })
    }
    console.error(error);
    return response.status(500).json({
        status : "error",
        message: "Internal Server Error",
    });
});



const PORT = 3333;
app.listen(PORT, () => console.log(PORT));































// app.get("/message/:id/:user", (request, response) => {
//     //desestruturar
//     const { id, user } = request.params;
    
//     response.send(`
//         Id da mensagem: ${id}.
//         User da mensagem: ${user}.
//     `)
// })  


// app.get("/users", (request, response) =>{
//     const {page, limit} =  request.query;

//     response.send(`
//         Pagina: ${page} 
//         Limite: ${limit}
//     `)
// })