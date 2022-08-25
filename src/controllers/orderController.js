const orderModel = require("../models/orderModel")
const productModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const createOrder= async function(req, res) {
    let data=req.body;
    let savedData;
    data.isFreeAppUser=req.isFreeAppUser
    if(data.isFreeAppUser=='true'){
        data.amount=0;
        savedData=await orderModel.create(data)
    }else{
        let product=await productModel.findOne({_id:data.productId}).select({price:1,_id:0})
        let price=product.price
        let user=await UserModel.findOne({_id:data.userId}).select({balance:1,_id:0})
        let balance=user.balance
        if(price<=balance){
            await UserModel.findOneAndUpdate(
                {_id:data.userId},
                {$inc:{balance:-(price)}}
            )
            data.amount=price
            savedData=await orderModel.create(data)
        }else{
            return res.send({Error:"Insufficient Balance"})
        }
    }
    res.send({data:savedData}) 
    }

module.exports.createOrder=createOrder

