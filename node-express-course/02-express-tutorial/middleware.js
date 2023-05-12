const express = require('express')
const logger = require('./logger')
const authorize = require('./authorize')

//third-party middleware
const  morgan = require('morgan')

const app = express()

// req => middleware => res
// app.use('/api',logger)
app.use(morgan('tiny'))
// app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Hello Home')
})

app.get('/about', (req, res) => {
    res.send('Hello About')
})

app.get('/api/products', (req, res) => {
    console.log(req.user)
    res.send('Products')
})

//set port to listen on
app.listen(5000, () => {
    console.log("Server is listening on 5000")
})