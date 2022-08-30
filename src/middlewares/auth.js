const jsonwebtoken = require("jsonwebtoken");
const userModel = require("../models/userModel");

const loginCheck = async function (req, res, next) {
  try {
    let email = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: email, password: password });
    if (!user) {
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });
    } else {
      req.user = user
      next()
    }
  }
  catch (error) {
    res.status(500).send({ mesaage: "Servor Error", Error: error.message })
  }
}

const tokenHeader = function (req, res, next) {
  try {
    req.token = req.headers["x-auth-token"];
    if (!req.token) {
      return res.status(401).send({ status: false, msg: "token must be present" });
    }
    next();
  }
  catch (error) {
    res.status(500).send({ mesaage: "Servor Error", Error: error.message })

  }
}

const tokenCheck = function (req, res, next) {
  try {
    let token = req.token;
    let decodedToken = jsonwebtoken.verify(token, "hbjsd&%#@ff6t36trwE$#$^&*jh");
    req["decodedToken"] = decodedToken;
    next();
  }
  catch (error) {
    res.status(500).send({ messsage: "Servor Error", Error: error.message })
  }

}

const userAuthorisation = function (req, res, next) {
  try {
    let decodedToken = req.decodedToken;
    let userId = req.params.userId;
    if (decodedToken.userId == userId) {
      next()
    } else {
      return res.status(403).send({ status: false, msg: "User does not have Permission for this Operation" })
    }
  }
  catch (error) {
    res.status(500).send({ mesaage: "Servor Error", Error: error.message })
  }
}


module.exports.tokenHeader = tokenHeader
module.exports.tokenCheck = tokenCheck
module.exports.userAuthorisation = userAuthorisation
module.exports.loginCheck = loginCheck

