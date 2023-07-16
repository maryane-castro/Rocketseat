const express = require("express");
const routes = require("./routes")

const app = express();
app.use(express.json())


app.use(routes)





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