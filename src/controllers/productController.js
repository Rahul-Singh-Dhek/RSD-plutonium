
const productModel= require("../models/productModel")

const createProduct=async function(req,res){
    let data = req.body 
    let allBooks = await productModel.create(data)
    res.send({ msg: allBooks })
}
module.exports.createProduct= createProduct
