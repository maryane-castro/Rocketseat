const express = require("express");
const app = express();
app.get("/message", (request, response) => {
    response.send('Hello Word')
})  


const PORT = 3333;


app.listen(PORT, () => console.log(PORT));