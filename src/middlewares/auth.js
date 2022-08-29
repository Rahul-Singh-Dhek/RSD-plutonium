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
  // console.log(decodedToken);
    req["decodedToken"]=decodedToken;
    next();
}

const userAuthorisation= function(req,res,next){
  let decodedToken = req.decodedToken;
  let userId = req.params.userId;
  if(decodedToken.userId==userId){
    next()
  }else{
    return res.send({status: false, msg: "User does not have Permission for this Operation"})
  }
}

const loginCheck=async function(req,res,next){
  let email = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: email, password: password });
  if (!user){
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  }else{
    req.user=user
    next()
  }
}
module.exports.tokenHeader=tokenHeader 
module.exports.tokenCheck=tokenCheck  
module.exports.userAuthorisation=userAuthorisation
module.exports.loginCheck=loginCheck

