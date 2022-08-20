
const newPublisherModel=require("../models/newPublisherModel.js");

const createNewPublisher=async function(req,res){
    let data=req.body;
    let saveData=await newPublisherModel.create(data);
    res.send({Data:saveData});
}

module.exports.createNewPublisher=createNewPublisher;