const fs = require("fs")
fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("Cannot read the file")
        console.log(err)
    } else {
        console.log(data)
    }
})



console.log("Bye Guys!!")
const data = fs.readFileSync("./text.txt", { encoding: "utf-8" })
console.log(data)
console.log("Bye Guys!!");


// let data;
try {
    data = fs.readFileSync("./text.txt", { encoding: "utf-8" })
} catch (error) {
    console.log(error)
}


const fs = require("fs")
fs.writeFile("./log.txt", "This is me first time wrinting in the file", (err) => {
    if (err) {
        console.log("Cannot write in the file")
        console.log(err)
    } else {
        console.log("Data has been written in the file")
    }
})
fs.writeFileSync("./log.txt", "This is me third time wrinting in the file")

const fs = require("fs")
fs.appendFile("./log.txt", "\nThis is me third time wrinting in the file\n", (err) => {
    if (err) {
        console.log("Cannot be appended")
        console.log(err)
    } else {
        console.log("Data has been appended in the file")
    }
})
