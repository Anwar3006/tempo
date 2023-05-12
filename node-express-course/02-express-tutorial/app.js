const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

//parse form data; parses incoming requests with url-encoded
//this middleware enables the use of "content-type: application/x-www-form-urlencoded"
app.use(express.urlencoded({extended : false}))

//parse incoming requests to json; returns an object(dictionary)
//use this middleware always before making post requests; allows you to write post request to be parsed to json; enables the use of "content-type: application/json"
app.use(express.json())
app.use('/api/people', people)
app.use('/login', auth)


//takes the port to listen on and a CB function to log when the server starts
app.listen(5000, () =>{
    console.log("Server is listening on port 5000")
})