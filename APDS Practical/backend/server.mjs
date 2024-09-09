//console.log("New Yusuf is cool")

import http from "http"

const PORT = 3000

const server = http.createServer((req, res) => (
    res.end('We are making this work, together')
))

server.listen(PORT)

