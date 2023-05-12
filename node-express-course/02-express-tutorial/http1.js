const http = require('http')

//createServer has a callback function; the CB function takes two params: request response
const server = http.createServer((req, res) => {
    console.log('User hit the Server'); //send message to us(the server)
    res.end('Welcome') //response.end to send/display message/page for client
    //response.end must be included with every response to signal the end of server response
});

server.listen(5000)