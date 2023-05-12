const express = require('express');
const path = require('path');

const app = express();

//to add the static files(css/js/images); where public is folder that contains the files
app.use(express.static('./public'))

//retrieve html file and render it for client
//this will only render the html not the css and js and other images
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

//handle all resources that arent available
app.all('*', (req, res) => {
    res.status(404).send('Resource not Found')
})

//attach to listening port
app.listen(5000, () => {
    console.log('Server started - Listening on 5000')
})