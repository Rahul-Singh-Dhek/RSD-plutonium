const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    bookName:String,
    autherName:String,
    category:String,
    year:Number
},{timestamps:true});

module.exports=mongoose.model('book',bookSchema);