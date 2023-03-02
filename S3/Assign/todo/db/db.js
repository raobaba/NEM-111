const mongoose = require('mongoose');
const URL = process.env.URL;

const connection = () =>{
 mongoose.connect(URL).then(() =>{
    console.log("Connection Successfully!");
 }).catch((err) =>{
    console.log({error : err, message : "Connection Failed!"})
 })
}


module.exports = connection;