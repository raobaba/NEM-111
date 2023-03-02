const mongoose = require("mongoose");
  

const main = async ()=>{
   try {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/school");
    console.log("Databases has been started");
    // await Studentmodel.insertMany([{name:"Rajan",age:23,city:"Siwan",is_Married:false}]);
    const student = new Studentmodel({
        
    })
    console.log("Added to the DB");
    connection.disconnect();
    console.log("Disconnecting");
   } catch (error) {
      console.log("Cannot connect")
      console.log(error);
   }
}
main();

const studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    is_Married:Boolean
})

const Studentmodel = mongoose.model("student",studentSchema);