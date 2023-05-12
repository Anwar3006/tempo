const express = require('express');
const router = require('./routes/philosophers')
const app = express();
const PORT = 5000;

//middleware
app.use(express.json())
app.use(router)


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
});