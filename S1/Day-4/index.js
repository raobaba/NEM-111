const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end("Hello")
    } else if (request.url === "/reports") {
        response.setHeader("Content-type", "text/html")
        response.end("<h1>Hello Guys!!</h1>")
    } else if (request.url === "/data") {
        fs.readFile("./data.json",(err,data)=>{
            if(err){
                response.write(err);
                response.end()
            }else{
                response.end(data);
            }
        })
    }else{
        response.end("Invalid End Point");
    }
})
server.listen(3000, () => {
    console.log("Listening on the port 3000")
})
