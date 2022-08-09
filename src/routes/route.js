const express = require('express');
const abc = require('../logger/logger.js')
const helper=require("../util/helper.js")
const formatter=require("../Validator/formatter.js")
const router = express.Router();
const lodash=require('lodash');


router.get('/test-me', function (req, res) {
    // abc.myWelcome();

    // helper.myCurDate();
    // helper.myCurMonth();
    // helper.myBatchInfo();

    // formatter.mytrim();
    // formatter.myLowerCase();
    // formatter.myUpperCase();


const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(lodash.chunk(months,3));

    res.send('My second ever api!');
const oddno=[1,3,5,7,9,11,13,15,17,19];
console.log("Lodash.tail output is---->",lodash.tail(oddno));

const one=[1,2,2,3]
const two=[3,3,4,5,5]
const three=[6,6,6,6]
const four=[7,7,8,8,8]
const five=[9,9,10,10]
const result=lodash.union(one,two,three,four,five);
console.log("Lodash.union Output is---->",result);

const arr=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
console.log(lodash.fromPairs(arr));
});



// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })
module.exports = router;
// adding this comment for no reason