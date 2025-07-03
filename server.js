
const express = require('express')

const app = express()

app.get ('/' ,(req, res,next) => {
    res.send('Hello World')

})
app.get ('/about' ,(req, res,next) => {
    res.send('About Us')
})
app.get ('/contact' ,(req, res,next) => {
    res.send('Contact Us')
})


app.listen(5000,()=>console.log('Server is running on port 5000'))
