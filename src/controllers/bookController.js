const bookModel=require('../models/bookModel.js');
const createBook=async function(req,res){
    let data=req.body;
    let savedData=await bookModel.create(data);
    res.send({Data:savedData});
}

const bookList=async function(req,res){
    let data=await bookModel.find().select({bookName:1,autherName:1,_id:0});
    res.send({Data:data})
}
module.exports.createBook=createBook;
module.exports.bookList=bookList;