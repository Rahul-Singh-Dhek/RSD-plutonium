const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController.js")

//------------------------------------------------Assignment/16 August-----------------------------------------------
router.post('/createBook',bookController.createBook);
router.get('/bookList',bookController.bookList);
router.post('/getBooksInYear',bookController.getBooksInYear);
router.post('/getParticularBooks',bookController.getParticularBooks);
router.post('/getXINRBooks',bookController.getXINRBooks);
router.post('/getRandomBooks',bookController.getRandomBooks);
//------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//-------------------------------------------------------------------------------------------------------------
module.exports = router;