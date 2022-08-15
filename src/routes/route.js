const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController.js")
const customerController=require("../controllers/customerController.js")
//------------------------------------------------Assignment/12 August-----------------------------------------------
router.post('/createBook',bookController.createBook);
router.get('/listBook',bookController.listBooks);
//------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
router.post('/createCustomer',customerController.createCustomer);
router.get('/customerList',customerController.customerList);
//-------------------------------------------------------------------------------------------------------------
router.post("/createUser", UserController.createUser);
router.get("/getUsersData", UserController.getUsersData);
//-------------------------------------------------------------------------------------------------------------
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//-------------------------------------------------------------------------------------------------------------
module.exports = router;