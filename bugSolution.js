const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Handle promise rejection
const promise = new Promise((resolve,reject) => {
    reject(new Error('Something went wrong'));
});

promise.catch(error => {
    console.error('Error:', error.message);
});