const http = require('http')

const server = http.createServer((req, res) => {
    // console.log('user hit the server')
    const url = req.url
    console.log(url)
    if (url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<h1> Hello World </h1>')
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write('<h1> About this </h1>')
        res.end()
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.write('<h1> Page not found </h1>')
        res.end()
    }

})

server.listen(80)