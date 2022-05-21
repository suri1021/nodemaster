const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data recieved name: ${name}, id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`data not recieved`)
})

customEmitter.emit('response', 'john', 34)

