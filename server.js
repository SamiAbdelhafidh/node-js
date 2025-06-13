
const express = require('express');

const app = express();

app.use ((req, res,next) => {
  console.log('welcome from home');
  next();

});
app.use((req,res) => {
  console.log('welcome from about');
});


app.listen(3000,()=>console.log('Server is running on port 3000'));
