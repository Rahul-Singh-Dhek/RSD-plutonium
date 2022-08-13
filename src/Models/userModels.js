const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String
},{timeStamps:true});

module.exports=mongoose.model('user',userSchema);
