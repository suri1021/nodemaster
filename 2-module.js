// Modules
//CommonJs, every file is moduel by default
// Modules - Encapsulated code (only share minimum)

const names = require('./1-names')
const sayHi = require('./1-utils')
const data = require('./2-alternativeflavour')

console.log(data)

sayHi(names.john)
sayHi(names.suren)
sayHi(names.peter)