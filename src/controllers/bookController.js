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

const getBooksInYear=async function(req,res){
    let obj=req.body;
    let data=await bookModel.find({year:obj.year});
    res.send({data:data});
}
const getParticularBooks=async function(req,res){
    let obj=req.body;
    let data=await bookModel.find(obj);
    res.send({data:data});
}

const getXINRBooks=async function(req,res){
    //let data=await bookModel.find({$or:[{prices:{indianPrice:{$eq:"100INR"}}},{prices:{indianPrice:{$eq:"200INR"}}},{prices:{indianPrice:{$eq:"500INR"}}}]});
   // let data=await bookModel.find({prices:{indianPrice:{$or:[{$eq:"100INR"},{$eq:"200INR"},{$eq:"500INR"}]}}})
    //let data=await bookModel.find({$or:[{prices:{indianPrice:"100INR"}},{prices:{indianPrice:"500INR"}}]})
    //let data=await bookModel.find({"prices.indianPrice":{$or:["100INR","200INR","500INR"]}})
    //let data=await bookModel.find({"prices.indianPrice":{$or:[{$eq:"100INR"},{$eq:"200INR"},{$eq:"500INR"}]}})
    //-------------------------------------------------------------------------------------------------------------------------------
    let data=await bookModel.find({$or:[{"prices.indianPrice":"100INR"},{"prices.indianPrice":{$eq:"200INR"}},{"prices.indianPrice":{$eq:"500INR"}}]})
    //let data=await bookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}});
    res.send({data:data})
}
const getRandomBooks=async function(res,res){
    let data=await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({data:data})
}

module.exports.createBook=createBook;
module.exports.bookList=bookList;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getParticularBooks=getParticularBooks;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;