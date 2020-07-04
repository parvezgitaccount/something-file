const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('file61.html');

const sarver = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end(fileContent)
});

sarver.listen(80, '127.0.0.1', () => {
    console.log("listiong on port 80")
});