
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("welcome to my server\n");
  res.write("Sami benAbdelhafidh");
  res.end();


});
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
