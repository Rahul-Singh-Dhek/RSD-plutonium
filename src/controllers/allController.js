const bookModel=require('../models/bookModel.js');
const autherModel=require('../models/autherModel.js');
//-----------------------------------------------------17Aug Assignment----------------------------------------------------------------------------
const createBook=async function(req,res){
    let data=req.body;
    let savedData=await bookModel.create(data);
    res.send({Data:savedData});
}
const createAuther=async function(req,res){
    let data=req.body;
    let savedData=await autherModel.create(data);
    res.send({Data:savedData});
}

const getChetanBhagatBooks=async function(req,res){
    let data=await autherModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    console.log(data);
    let list=await bookModel.find(data);
    res.send({Data:list});
}

const updateTwoStates=async function(req,res){
    let data=await bookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set:{price:100}},
        {new:true}
        )
    let auther=await autherModel.findOne({author_id:data.author_id}).select({author_name:1,_id:0});
    res.send({Price:data.price,Auther_Name:auther.author_name})
}

const getAuthorbyPrice=async function(req,res){
    let data=await bookModel.find({price:{$gte : 50,$lte : 100}}).select({author_id:1,_id:0});
    let output=[];
    for(let i=0;i<data.length;i++){
    let out= await autherModel.findOne(data[i]).select({author_name:1,_id:0});
    output.push(out.author_name)
    }
    // let output=data.map(x=>{
    //  let out = autherModel.findOne(x).select({author_name:1,_id:0});
    //  return out;
    // })
    // console.log(output1);
    res.send({Data:output});
}

module.exports.createBook=createBook;
module.exports.createAuther=createAuther;
module.exports.getChetanBhagatBooks=getChetanBhagatBooks;
module.exports.updateTwoStates=updateTwoStates;
module.exports.getAuthorbyPrice=getAuthorbyPrice;
