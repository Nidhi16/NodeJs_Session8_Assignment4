// Load the http module to create an http server.
var http = require('http');
// Load the RFC4122 module to generate uuids.
var RFC4122 = require('rfc4122');

var rfc4122 = new RFC4122();

// Configure our HTTP server to respond to all requests.
var server = http.createServer(function(request, response) {
    response.writeHead("200", {"Content-Type": "text/plain"});
    response.write(rfc4122.v1());
    console.log(rfc4122.v1());
    response.write("\n");
    response.write(rfc4122.v4());
    console.log(rfc4122.v4());
    response.end();    
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);