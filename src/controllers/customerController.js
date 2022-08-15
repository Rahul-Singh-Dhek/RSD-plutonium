const customerModel=require('../models/customerModel.js')
const createCustomer=async function(req,res){
    let data = req.body;
    let savedData=await customerModel.create(data);
    res.send({data:savedData})
}
const customerList=async function(req,res){
    let list=await customerModel.find();
    res.send({data:list});
}

module.exports.createCustomer=createCustomer;
module.exports.customerList=customerList;