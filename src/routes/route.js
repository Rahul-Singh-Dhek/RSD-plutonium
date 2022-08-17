const express = require('express');
const router = express.Router();
const allController= require("../controllers/allController.js")

//------------------------------------------------Assignment/16 August-----------------------------------------------
router.post('/createBook',allController.createBook);
router.post('/createAuther',allController.createAuther);
router.post('/getChetanBhagatBooks',allController.getChetanBhagatBooks);
router.post('/updateTwoStates',allController.updateTwoStates);
router.post('/getAuthorbyPrice',allController.getAuthorbyPrice);
//------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//-------------------------------------------------------------------------------------------------------------
module.exports = router;