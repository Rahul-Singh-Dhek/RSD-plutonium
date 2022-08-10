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
    let N1 = Body.name;
    let match = false;
    for (let i = 0; i < players.length; i++) {
        let N2 = players[i].name
        if (N1 == N2) {
            match = true;
            return res.send("Player already exists");
        }
    }
    if (match == false) {
        players.push(Body);
    }
    res.send({ data: players, status: true })
})

//OPTIONAL QUESTION------------------------------------------------------------------------------------------------------------------------

let booking = [{
    'bookingNumber': 1,
     'sportId': 'ED101',
     'centerId': 'BH101',
    'type': 'private',
    'slot': '16286598000000',
'bookedOn': '31 / 08 / 2021',
'bookedFor': '01 / 09 / 2021'
   }
];

router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    let playerName = req.params.playerName;
    let bookingID = req.params.bookingId;
    // console.log(playerName);
    // console.log(bookingID);
    let NameExist = false;
    for (let i = 0; i < players.length; i++) {
        let Name = players[i].name;
        if (playerName == Name) {
            NameExist = true;
            break;
        }
    }
    if(NameExist){
    }else{
        res.send({Error:"Player not found"})
    }
    
    let IDexists=false;   
    for(let i=0;i<booking.length;i++){
        let bookingNumber = booking[i].bookingNumber
        if(bookingNumber==bookingID){
            IDexists=true;
            break;
        }
    }
    let body=req.body;
    if(IDexists){
        res.send({Error:"Booking was already processed"});
    }else{
        booking.push(body);
        res.send(booking);
    }
})


module.exports = router;

// adding this comment for no reason