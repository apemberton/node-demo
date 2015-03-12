// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Count down from 10 seconds
(function countDown (counter) {
  console.log(counter);
  if (counter > 0)
    return setTimeout(countDown, 1000, counter - 1);

  // Close the server
  server.close(function () { console.log('Server closed!'); });
})(4);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
