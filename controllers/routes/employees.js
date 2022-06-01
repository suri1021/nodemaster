const express = require('express')
const router = express.Router()

const {
getEmployees, 
addEmployee, 
editEmployee, 
deleteEmployee
 } = require('../controller/employeesController')

//router.get('/', getEmployees)

//router.post('/', addEmployee)

//router.put('/:id', editEmployee)

//router.delete('/:id', deleteEmployee)

router.route('/').get(getEmployees).post(addEmployee)
router.route('/:id').put(editEmployee).delete(deleteEmployee)

module.exports = router