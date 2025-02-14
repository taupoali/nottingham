const http = require('http');

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
  })
  .listen(3000, '127.0.0.1');

console.log('Server running at 3000')