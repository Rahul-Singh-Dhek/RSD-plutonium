const UserModel= require("../models/userModel")




const createUser= async function(req, res) {
    let data=req.body;
    data.isFreeAppUser=req.isFreeAppUser
    let savedData=await UserModel.create(data)
    res.send({data:savedData}) 
    }



module.exports.createUser= createUser