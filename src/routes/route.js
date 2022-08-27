const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middlewares/auth.js")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",middleware.tokenHeader,middleware.tokenCheck,middleware.userCheck,userController.getUserData)

router.put("/users/:userId",middleware.tokenHeader,middleware.tokenCheck,middleware.userCheck, userController.updateUser)

router.delete("/users/:userId",middleware.tokenHeader,middleware.tokenCheck,middleware.userCheck, userController.deleteUser)

module.exports = router;  