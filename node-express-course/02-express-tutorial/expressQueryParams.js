const express = require('express')

const app = express()

const {products} = require('./data')

app.get('/', (req, res) => {
    // res.json([
    //     {name: "Soren Kierkegaard"},
    //     {name: "Baruch Spinoza"},
    //     {name: "Fredrich Neitszche"}
    // ])
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    //we want to select certain keys and display them
    const newProducts = products.map((product) => {
        const {id, name} = product
        return {id, name}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    //we want to select certain keys and display them
    // console.log(req.params)
    const {productID} = req.params
    const oneProduct = products.find((product) => product.id === Number(productID))
    
    if(!oneProduct) {
        return res.status(404).send('Product Does Not Exist')
    }
    
    res.json(oneProduct)
})

//query string parameters
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    //create new array with elements in products
    let sortedProducts = [...products]

    if(search) {
        //filter elemnents and assign to array based on search criteria
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    //slice the array based on limit; limit is the number of search results the user wants
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
//to avoid errors use return for all your CB functions if you are sending response to the 
// client. if you are using res.send/json within CB functions; use return with it
    if(sortedProducts.length < 1){
        return res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
})

//set port to listen on
app.listen(5000, () => {
    console.log("Server is listening on 5000")
})