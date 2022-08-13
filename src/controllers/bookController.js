const bookModel=require('../models/bookModel.js');
const createBook=async function(req,res){
    let data=req.body;
    let savedData=await bookModel.create(data);
    res.send({Data:savedData});
}

const listBooks=async function(req,res){
    let data=await bookModel.find();
    res.send({Data:data})
}
module.exports.createBook=createBook;
module.exports.listBooks=listBooks;