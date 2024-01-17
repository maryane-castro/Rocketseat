import http from 'node:http' //modulo interno do 

const server = http.createServer((req, res) => {
    return res.end("hello world")
})

server.listen(3333)