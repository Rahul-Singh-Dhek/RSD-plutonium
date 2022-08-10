const express = require('express');
const router = express.Router();

//-----------------------------------------------------------10 Aug Assignment---------------------------------------------------------------------------

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

router.post('/players', function (req, res) {
    let Body = req.body;
    console.log(Body);
    let N1 = Body.name;
    let match = false;
    for (let i = 0; i < players.length; i++) {
        let N2 = players[i].name
        console.log(N2);
        if (N1 == N2) {
            match = true;
            break;
        }
    }
    if (match == false) {
        players.push(Body);
    }
    res.send({ data: players, status: true })
})

module.exports = router;

// adding this comment for no reason