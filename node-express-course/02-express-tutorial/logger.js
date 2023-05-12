//middleware function

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time )
    next() //to pass this middleware function to the next middleware
}

module.exports = logger