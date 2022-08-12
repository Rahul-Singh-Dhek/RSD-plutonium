const express = require('express');
var bodyParser = require('body-parser');
const {default:mongoose}=require('mongoose');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://rahuldhek21:18248518@cluster0.190udme.mongodb.net/Rahul1824-DB",{
    useNewUrlParser: true
})
.then(()=>console.log("Mongoose is connected"))
.catch(err=>console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

