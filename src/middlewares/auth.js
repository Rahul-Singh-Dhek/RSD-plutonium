const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");


const tokenHeader=function(req,res,next){
     req.token = req.headers["x-Auth-token"];
    if (!req.token){ 
        req.token = req.headers["x-auth-token"];
    }
    if (!req.token) {
      return res.send({ status: false, msg: "token must be present" });
    }
    next();
}

const tokenCheck= function(req,res,next){
  let token = req.token;
    let decodedToken = jsonwebtoken.verify(token,"hbjsd&%#@ff6t36trwE$#$^&*jh");
  console.log(decodedToken);
  if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  }else{
    req["decodedToken"]=decodedToken;
    next();
  }  
}

const userCheck=async function(req,res,next){
  let decodedToken = req.decodedToken;
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  console.log(userDetails);
  if (!userDetails){
    return res.send({ status: false, msg: "No such user exists" });
  }else if(decodedToken.userId==userDetails._id){
    req.userDetails=userDetails;
    next()
  }else{
    return res.send({status: false, msg: "userID is not matching with the Token"})
  }
}
module.exports.tokenHeader=tokenHeader 
module.exports.tokenCheck=tokenCheck  
module.exports.userCheck=userCheck
