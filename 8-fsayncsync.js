 // sync methods

 const {readFileSync, writeFileSync} = require('fs')

 console.log('start')
 const first = readFileSync('./content/first.txt', 'utf-8')
 const second = readFileSync('./content/second.txt','utf-8')


 writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

 const result = readFileSync('./content/result-sync.txt', 'utf-8')
 console.log('done with this task')
 console.log('starting the next task')