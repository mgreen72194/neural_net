const http = require('http');
const nn = require('./nn.js')

const host = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(nn.printArr());
    res.end();
})

server.listen(port, host, () => {
    console.log("Server running")
})