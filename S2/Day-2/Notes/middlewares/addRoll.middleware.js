const addRoll = (req,res,next)=>{
    if(req.method==="POST"){
        const roll = Math.random()*100;
        req.body.roll_number = roll;
        req.body.school = "MasaiSchool";
        next();
    }
}
module.exports = {
    addRoll
}