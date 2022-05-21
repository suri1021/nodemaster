// Modules
//CommonJs, every file is moduel by default
// Modules - Encapsulated code (only share minimum)

const names = require('./1-names')
const sayHi = require('./1-utils')

console.log(names)


sayHi(names.john)
sayHi(names.suren)
sayHi(names.peter)