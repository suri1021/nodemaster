const express = require('express')
const morgan = require('morgan')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//req => middleware => res
//app.use('/api', logger)

// 1. use vs route
// our own/ express/ thirdparty (middle options)
app.use([logger, authorize])
app.use(morgan('tiny'))
app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (req,res) => {
    res.send('about')
})

app.get('/api/products', (req, res) => {
    console.log(req.user)
    res.send('products')
})

app.listen(3000, () => {
    console.log('server started and listening at 3000')
})

//http://localhost:3000/about?user=john