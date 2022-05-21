
const http = require('http')

const httpserver = http.createServer((req,res) => {
    if (req.url == '/') {
        res.end('<b> Welcome to Home Page </b>')
    }
    else if (req.url == '/about') {
        for (let i=0; i<10000; i++) {
            for(let j=0; j<1000; j++) {
                for(let k=0; k<1000; k++) {

                }
            }
        }
        res.end('<b>About Page</b>')
    }
    else {
        res.end(`<h1> Oops </h1>  <p> you cant fiind page your lookig for </p>
     <a href ="/"> back home </a>`);
    }
})

httpserver.listen(5000, () => {
    console.log('Server Listening on port 5000...')
})