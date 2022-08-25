
const productModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const mid1= function ( req, res, next) {
   if(req.headers.isfreeappuser){
    req.isFreeAppUser=req.headers.isfreeappuser;
    next()
}else{
    res.send({Error:"isFreeAppUser header is necessary"})
} 
    }

const mid2=async function(req,res,next){
const data=req.body;
const userExist=await UserModel.findOne({_id:data.userId})
const productExist=await productModel.findOne({_id:data.productId})
if(userExist && productExist){
    next()
}else if(!userExist && !productExist){
    res.send({Error:"User and Product does not Exists"})
}else if(!userExist){
    res.send({Error:"User Does not Exists"})
}else if(!productExist){
    res.send({Error:"Product Does not Exists"})
}

}


module.exports.mid2= mid2

module.exports.mid1= mid1

