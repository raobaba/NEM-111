const http = require('http')
const fs = require('fs')
const url= require("url")
const path = require('path')
const dirPath = path.join(__dirname, './')
const dirPath2 = path.join(__dirname, './public')
const dirPath3 = path.join(__dirname, './public/other')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readdir(dirPath, (e, d) => {
            if (e) {
                console.log(e);
            }
            else {
                res.setHeader("content-type", "text/html")
                d.map((el) => {
                    res.write(`
                    <a href=${el}>
                    <li>${el}</li>
                    </a>
                    `)
                })
                res.end()
            }
        })
    }
    else if (req.url === "/public") {
        fs.readdir(dirPath2, (e, d) => {
            if (e) {
                console.log(e);
            }
            else {
                res.setHeader("content-type", "text/html")
                d.map((el) => {
                    res.write(`
                    <a href='/public/${el}'>
                    <li>${el}</li>
                    </a>
                    `)
                })
                res.end()
            }
        })
    }
    else if (req.url === "/public/other") {
        fs.readdir(dirPath3, (e, d) => {
            if (e) {
                console.log(e);
            }
            else {
                res.setHeader("content-type", "text/html")
                d.map((el) => {
                    res.write(`
                    <a href= '#'>
                    <li>${el}</li>
                    </a>
                    `)
                })
                res.end()
            }
        })
    }

})
server.listen(8080, () => {
    console.log("Server started on port http://localhost:8080/");
})