const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://RahulSinghDhek:18248518@cluster0.dxzlfnc.mongodb.net/rahul21-DB?retryWrites=true&w=majority"
, {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

