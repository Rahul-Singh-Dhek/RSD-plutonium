const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController = require ("../controllers/productController")
const commonMiddlewares=require("../middlewares/commonMiddlewares.js")
const orderController = require ("../controllers/orderController")


router.post("/createProduct", productController.createProduct )
router.post("/createUser",commonMiddlewares.mid1,UserController.createUser)
router.post("/createOrder",commonMiddlewares.mid1,commonMiddlewares.mid2,orderController.createOrder)


module.exports = router;