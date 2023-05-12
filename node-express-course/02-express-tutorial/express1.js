const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Home Page')
});

app.get('/about', (req, res) => {
    res.send('About Page')
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not Available</h1>')
})
//takes the port to listen on and a CB function to log when the server starts
app.listen(5000, () =>{
    console.log("Server is listening on port 5000")
})