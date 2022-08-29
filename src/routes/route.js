const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middlewares/auth.js")

router.post("/users", userController.createUser  )

router.post("/login",middleware.loginCheck, userController.loginUser)

router.get("/users/:userId/fetch", middleware.tokenHeader, middleware.tokenCheck, middleware.userAuthorisation,userController.getUserData)

router.put("/users/:userId",middleware.tokenHeader,middleware.tokenCheck,middleware.userAuthorisation, userController.updateUser)

router.delete("/users/:userId",middleware.tokenHeader,middleware.tokenCheck,middleware.userAuthorisation, userController.deleteUser)

module.exports = router;  