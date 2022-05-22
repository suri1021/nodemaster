const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const styles = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const browser_js = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req, res) => {
    // console.log('user hit the server')
    const url = req.url
    console.log(url)
    if (url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(homePage)
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        res.write(styles)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        res.write(logo)
        res.end()
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, {
            'content-type': 'text/javascript'
        })
        res.write(browser_js)
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