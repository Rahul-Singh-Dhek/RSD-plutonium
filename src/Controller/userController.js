const userModel=require("../Models/userModels.js");


const createData=async function(req,res){
let data=req.body;
let savedData=await userModel.create(data);
res.send({inserted:savedData});
}

module.exports.createData=createData;