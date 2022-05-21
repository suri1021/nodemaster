const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`ths system uptime is ${os.uptime()/100} seconds`)

const currentOS = { 
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)