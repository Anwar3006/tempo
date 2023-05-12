//attempt to set up server with just HTTP module instead of Express

const http = require('http')
const {readFileSync} = require('fs')

//get homepage
const homepage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

//createServer has a callback function; the CB function takes two params: request response
const server = http.createServer((req, res) => {
    const url = req.url
    //homepage
    if (url === '/'){
        //create metadata to be sent with the response
        res.writeHead(200, {'content-type' : 'text/html'}) //response header
        res.write(homepage) //this is the response body
        res.end()
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'}) //response header
        res.write('<h1>About Page</h1>') //this is the response body
        res.end()
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'}) //response header
        res.write(homeStyles) //this is the response body
        res.end()
    }
    //styles
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'}) //response header
        res.write(homeImage) //this is the response body
        res.end()
    }
    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'}) //response header
        res.write(homeLogic) //this is the response body
        res.end()
    }
    //404
    else{
        res.writeHead(404, {'content-type' : 'text/html'}) //response header
        res.write('<h1>Page Not Found</h1>') //this is displayed on the page
        res.end()
    }
});

server.listen(5000)