const mongoose=require('mongoose');
const customerSchema=new mongoose.Schema({
    cutomerName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
    },
    purchaseAmount:Number
},{timestamps:true});
module.exports=mongoose.model('customer',customerSchema);