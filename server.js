
const http = require('http');

const server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/html');
  res.write("Sami benAbdelhafidh\n ");

  if (req.url == '/home') {
    res.statusCode=200
    res.write("<h1>Welcome to the home page </h1>")
  }
  else if (req.url == '/about') {
    res.statusCode=200
    res.write("<h1>Welcome to the about page </h1>")
  }
  else if (req.url == '/contact') {
    res.statusCode=404
    res.write("<h1>Welcome to the contact page</h1>")
  }
  else {
    res.statusCode = 404
    res.write("<h1>404 Not Found</h1>")
  }
  
  res.end("done");


});
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
