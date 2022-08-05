const express = require('express');
const abc = require('../logger/logger.js')
const helper=require("../util/helper.js")
const formatter=require("../Validator/formatter.js")
const router = express.Router();


router.get('/test-me', function (req, res) {
    abc.myWelcome();

    helper.myCurDate();
    helper.myCurMonth();
    helper.myBatchInfo();

    formatter.mytrim();
    formatter.myLowerCase();
    formatter.myUpperCase();
    res.send('My second ever api!');
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason