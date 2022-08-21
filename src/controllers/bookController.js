
const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")


const createNewBook= async function (req, res) {
    let book = req.body;
    let author=book.author;
    let publisher=book.publisher;
    if(!author){
       return res.send({Error:"Author_ID is Compulasry"})
    }else if (!publisher){
       return res.send({Error:"Publisher_ID is Compulasry"})
    }

    author=await newAuthorModel.findOne({_id:author});
    console.log(author)
    if(!author){
        return res.send({Error:"Author_ID is invalid"})
    }
    publisher=await newPublisherModel.findOne({_id:publisher});
    if(!publisher){
        return res.send({Error:"Publisher_ID is invalid"})
    }

    let bookCreated = await newBookModel.create(book)

    res.send({data: bookCreated})
}

const getBooksWithAllDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author publisher')
    res.send({data: specificBook})
}

const books=async function(req,res){
    
    let savedHard=await newBookModel.find().populate({path:'publisher',match:{$or:[{name:"Penguin"} ,{name:"HarperCollins"}]}})
    let sh=[]
    savedHard.forEach(element => {
        if(element.publisher!=null){
            sh.push(element._id);
        }
    });
    let ud=await newBookModel.find().updateMany(
        {_id:sh},
        {$set:{isHardCover:true}},
        )
//------------------------------------------------------------------------------------------------------------
    let savedAuthor=(await newBookModel.find().populate('author')).filter(function(x){
        if(x.author.rating>3.5){
            return (x);
        }})
    let sa=[]
    savedAuthor.forEach(element => {
                sa.push(element._id);
            }
    );
    let ua=await newBookModel.find().populate('author').updateMany(
            {_id:sa},
            {$inc:{price:+10}},
            )

    res.send({"Update Cover":ud,"Updated Prcie":ua,"Message":"Documents are succesfully Updated"})
    // res.send(savedAuthor);
}


module.exports.createNewBook= createNewBook
module.exports.getBooksWithAllDetails = getBooksWithAllDetails
module.exports.books=books
