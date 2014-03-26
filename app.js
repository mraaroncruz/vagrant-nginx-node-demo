// Load the http module to create an http server.
var http = require('http'),
    os   = require('os');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(os.hostname());
});

// Listen on port 3000, IP defaults to 0.0.0.0
var ip = "0.0.0.0";
var port = 3000;
server.listen(port, ip);

// Put a friendly message on the terminal
console.log("Server running at http://" + ip + ":" + port);
