const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    bookName:String,
    autherName:String,
    //category:String,
    //year:Number
    tags:[String],
    date:{
        type:Date,
        default:Date.now
    },
    isPublished:{type:Boolean,default:false},
    prices:{
        indianPrice:String,
        europePrice:String
    },
    sales:{
        type:Number,
        default:10
    }
},{timestamps:true});

module.exports=mongoose.model('book',bookSchema);