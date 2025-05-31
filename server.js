
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("welcome to my server\n");
  res.write("Sami benAbdelhafidh\n ");
  res.end("done");


});
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
