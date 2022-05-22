const express = require('express')
const app = express()
const {products} =  require('./data')


app.get('/', (req,res) => {
  res.send(
    '<h1> Home Page </h1> <a href = "api/products">produts</a>' 
  )
})

app.get('/api/products', (req,res) => {
  const newProducts = products.map((product) => {
    const {id,name,image} = product;
    return {id, name, image}
  })

  res.json(newProducts)
})

app.get('/api/products/:productID', (req,res) => {
  console.log(req.params)
  const {productID} = req.params;
  const singleProduct = products.find((product) => 
  product.id == Number(productID))

  if (! singleProduct) {
    return res.status(404).send('product does not exist')
  }
  
  res.json(singleProduct)
})


app.listen(3000, () => {
  console.log('sever started listening on port 3000')
})