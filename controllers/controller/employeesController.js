let {employees} = require('../routes/data.js')

const getEmployees = (req, res) => {
    res.status(200).json({success: true, data:employees})
}

const addEmployee = (req,res) => {
    console.log(req.body)
   const {name} = req.body  
   if(!name) {
       return res.status(400).json({success:false, msg:'please provide name value'})
   }
   res.status(201).send({success: true, employee})
}

const editEmployee = (req,res)=> {
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
}

const deleteEmployee = (req,res)=> {
    const {id}  = req.params;

    const employee = employees.find((employee) => 
    employee.id === Number(req.params.id))
    if( !employee) {

    }

    const delEmployee = employees.filter((person) => person.id
    != Number(req.params.id))

    return res.status(200).json({success: true, data: delEmployee})
}

module.exports = {getEmployees, addEmployee, editEmployee, deleteEmployee}