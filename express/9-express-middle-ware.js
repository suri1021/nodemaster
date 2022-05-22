const express = require('express')
const app = express()
const logger = require('./logger')

//req => middleware => res
//app.use('/api', logger)
app.use(logger)
app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.get('/api/products', (req, res) => {
    res.send('products')
})

app.listen(3000, () => {
    console.log('server started and listening at 3000')
})