const express = require('express')
const app = express()

const employees = require('./employees')
const auth = require('./auth')
//static data
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/employees', employees)
app.use('/login', auth)

app.listen(3000, () => {
    console.log('listening at 3000')
})
