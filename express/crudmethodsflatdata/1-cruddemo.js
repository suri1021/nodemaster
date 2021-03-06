const express = require('express')
const { rest } = require('lodash')
const app = express()
const employees = require('./employees')
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

app.put('/api/employees/:id', (req,res)=> {
    const {id}  = req.params;
    const {name} = req.body;
    const {email} = req.body;

    const employee = employees.find((employee) => employee.id
    === Number(id))

    if (!employee) {
        return res
        .status(404)
        .json({success: false, msg: `no person with id ${id}`})
    }
    const newEmployee = employees.map((employee) => {
        if (employee.id === Number(id)) {
            employee.name = name;
            employee.email = email;
        }
        return employee;
    })

    res.status(200).json({success: true, data: newEmployee})
})

app.delete('/api/employees/:id', (req,res)=> {
    const {id}  = req.params;

    const employee = employees.find((employee) => 
    employee.id === Number(req.params.id))
    if( !employee) {

    }

    const delEmployee = employees.filter((person) => person.id
    != Number(req.params.id))

    return res.status(200).json({success: true, data: delEmployee})
})


app.listen(3000, () => {
    console.log('listening at 3000')
})