
const directoryPath = __dirname
let fs=require('fs')
let t=process.argv.slice(2)
let key=t[0]
if(key==="read"){
console.log(fs.readFileSync(t[1],"utf8"))
}else if(key==="append"){
    fs.appendFile(t[2], t[1],(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("File Updated")
        }
    })
}else if(key==="delete"){
    fs.unlinkSync(t[1])
    console.log("File Deleted")
}
else if(key==="create"){
    fs.open(t[1],"wx",(err)=>{
        if(err){
            console.log("File already exists")
        }else{
            console.log("Created File")
        }
    })
}
else if(key==="rename"){
    fs.rename(t[1],t[2],(err)=>{
        if(err){
            console.log("err")
        }else{
            console.log("Renamed File")
        }
    })
}
else if(key==="list"){
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            if (!fs.statSync(file).isDirectory()){
              console.log(file)
            }
        });
    });
}
