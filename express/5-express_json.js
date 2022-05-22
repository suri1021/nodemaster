const express = require('express')
const app = express()
const {products} =  require('./data')


app.get('/', (req,res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('sever started listening on port 5000')
})