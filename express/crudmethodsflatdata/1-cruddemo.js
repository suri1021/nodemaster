const express = require('express')
const { rest } = require('lodash')
const app = express()
let employees = require('./employees')
//static data
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/employees', (req, res) => {
    res.status(200).json({success: true, data:employees})
})

app.post('/api/employees', (req,res) => {
    console.log(req.body)
   const {name} = req.body  
   if(!name) {
       return res.status(400).json({success:false, msg:'please provide name value'})
   }
   res.status(201).send({success: true, employee})
})

app.post('/login', (req,res) => {
    const {name} = req.body

    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }

    res.status(404).send('please provide credentials')
})
app.listen(3000, () => {
    console.log('listening at 3000')
})