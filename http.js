const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our Homepage")
    }
    else if(req.url === '/about'){
        res.end("This is the About page")
    }else {
        res.end(`
        <h1>OOPS!</h1>
        <p> We cant find the resource you are looking for</p>
        `)
    }
})

server.listen(5000)