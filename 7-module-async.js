// sync methods

const {readFile, writeFile} = require('fs')

console.log('beginnning')
readFile('./content/first.txt','utf-8', (err, result) => {
    if (err) { 
        console.log(err)
        return
    }

    const first = result

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) { 
            console.log(err)
            return
        }
        const second = result
        
        console.log('reading task')
        writeFile('./content/result-sync.txt', 
        `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
    

            console.log('writing task')
        })

    })
})

console.log('starting with this task')

