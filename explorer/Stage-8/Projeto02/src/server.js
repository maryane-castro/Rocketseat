// importações
const Express = require("express")
const routes = require("./routes")

// inicializações
const express = Express()


//configurações
express.use(Express.json())
express.use(routes)

//porta de escuta do express
const PORT = 3333
express.listen(PORT, () => {
    console.log(PORT)
})

