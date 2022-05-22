const express = require('express')
const path = require('path')

const app = express()

//express takes care of all the files in index.html
//set up staic and middleware
app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})