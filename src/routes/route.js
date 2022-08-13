const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookController= require("../controllers/bookController.js")

//------------------------------------------------Assignment/12 August-----------------------------------------------
router.post('/createBook',bookController.createBook)
router.get('/listBook',bookController.listBooks)

//------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

module.exports = router;