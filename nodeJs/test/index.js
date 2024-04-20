const http = require('http');
const hostname = '0.0.0.0';
const port = 6001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world\n');
});
server.listen(port, hostname, () => {
    console.log('Server ruuning at http://${hostname}:${port}/')
});