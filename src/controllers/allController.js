const bookModel=require('../models/bookModel.js');
const autherModel=require('../models/autherModel.js');

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
    res.send({Data:data,Auther_Name:auther.author_name})
}

const getAuthorbyPrice=async function(req,res){
    let data=await bookModel.find({price:{$gte : 50,$lte : 100}}).select({author_id:1,_id:0});
    console.log(data);
    let output=[];
    for(let i=0;i<data.length;i++){
    let output1=await autherModel.findOne({author_id:data[i].author_id}).select({author_name:1,_id:0});
    output.push(output1.author_name)
    }
    // console.log(output1);
    // data.forEach(element => {
    //     console.log(element)
    //     output.push(autherModel.findOne({...element}));//.select({author_name:1,_id:0});
    //     console.log(output);
    // });
    res.send({Data:output});
}

module.exports.createBook=createBook;
module.exports.createAuther=createAuther;
module.exports.getChetanBhagatBooks=getChetanBhagatBooks;
module.exports.updateTwoStates=updateTwoStates;
module.exports.getAuthorbyPrice=getAuthorbyPrice;
