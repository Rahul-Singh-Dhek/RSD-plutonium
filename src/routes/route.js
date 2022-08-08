const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/movies', function (req, res) {
    const arr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins", "Wayne", "I am not okay with this"];
    res.send(arr);
});

router.get('/movies/:indexNumber',function(req,res){
    const arr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins", "Wayne", "I am not okay with this"];
    let requestParams = req.params
    let index=requestParams.indexNumber;
    let movieName=arr[index];
    res.send(movieName||"Error : use a valid index");
})

router.get('/filmes',function(req,res){
    const obj=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    res.send(obj);
})

router.get('/films/:filmId',function(req,res){
    const obj=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    let requestParams=req.params;
    let gID=requestParams.filmId;
    let result;
    for (let i=0;i<obj.length;i++){
        let id=obj[i].id;
        if(id==gID){
            result=obj[i];
        }
    }
    res.send(result||"No movie exists with this id")
})

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     logger.welcome()

//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res) {
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/student-details/:name', function (req, res) {
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request " + JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)

//     res.send('Dummy response')
// })

module.exports = router;