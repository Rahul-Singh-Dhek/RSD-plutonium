const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");
//+++++++++++++++++++++++++++++++++++++++++++++++++++ Assignment Authentication-1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let email = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: email, password: password });
  if (!user){
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  }else{
  let token = jsonwebtoken.sign(
    {
      userId: user._id.toString(),
      email:user.emailId,
      organisation: "FunctionUp",
    },
    "hbjsd&%#@ff6t36trwE$#$^&*jh"
  );
  res.send({ status: true, token: token });}
};

const getUserData = function (req, res) {
  data=req.userDetails
 res.send({ status: true, Data: data});
};

const updateUser = async function (req, res) {
  let userData = req.body;
  let userId=req.params.userId
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: true, data: updatedUser });
};

const deleteUser=async function(req,res){
  let userId=req.params.userId
  let delUser=await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
  res.send({ status: true, data: delUser })
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

