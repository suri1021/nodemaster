/*const {writeFileSync} = require('fs')

for (let i=0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hellow world ${i} \n`, {flag: 'a'})
}*/

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark:90000, encoding: 'utf-8'
})

//reading data in chunks 64 kbs for each chunk default
//can be changed with highwatermark
stream.on('data', (result) => {
    console.log(result.length)
})

// no such file error checking
stream.on('error', (err) => {
    console.log(err)
})