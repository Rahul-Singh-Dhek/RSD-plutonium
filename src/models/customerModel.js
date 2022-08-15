const mongoose=require('mongoose');
const customerSchema=new mongoose.Schema({
    cutomerName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:String,
        unique:false
    }
},{timestamps:true});
module.exports=mongoose.model('customer',customerSchema);