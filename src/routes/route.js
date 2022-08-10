const express = require('express');
const router = express.Router();

//-----------------------------------------------------------2nd Assignment/10 Aug---------------------------------------------------------------------------

let persons =
    [
        {
            "name": "PK",
            "age":10,
            "votingStatus":false
            
        },
        {
            "name": "SK",
            "age":20,
            "votingStatus":false
            
        },
        {
            "name": "AA",
            "age":70,
            "votingStatus":false
        },
        {
            "name": "SC",
            "age":5,
            "votingStatus":false
        },
        {
            "name": "HO",
            "age":40,
            "votingStatus":false
        }

    ]

    router.post("/persons",function(req,res){
        ReceivedAge=req.query.age;
        let output=[];
        for(let i=0;i<persons.length;i++){
            let per=persons[i];
            if(per.age>ReceivedAge){
                persons[i].votingStatus=true;
                output.push(per);
            }
        }
        res.send({Data:output,status:true});
    })


module.exports = router;

// adding this comment for no reason