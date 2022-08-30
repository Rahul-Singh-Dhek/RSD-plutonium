const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");
//+++++++++++++++++++++++++++++++++++++++++++++++++++ Assignment Authentication-1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  }
  catch (error) {
    res.status(500).send({ msg: "Servor Error", Error: error.message })
  }
};

const loginUser = function (req, res) {
  try {
    let user = req.user
    let token = jsonwebtoken.sign(
      {
        userId: user._id.toString(),
        email: user.emailId,
        organisation: "FunctionUp",
      },
      "hbjsd&%#@ff6t36trwE$#$^&*jh"
    );
    res.status(200).send({ status: true, token: token });
  }
  catch (error) {
    res.status(500).send({ msg: "Servor Error", Error: error.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let data = await userModel.findById(req.params.userId)
    res.status(200).send({ status: true, Data: data });
  }
  catch (error) {
    res.status(500).send({ msg: "Servor Error", Error: error.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let userData = req.body;
    let userId = req.params.userId
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (error) {
    res.status(500).send({ msg: "Servor Error", Error: error.message })
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let delUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.status(200).send({ status: true, data: delUser })
  }
  catch (error) {
    res.status(500).send({ msg: "Servor Error", Error: error.message })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

