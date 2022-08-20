const newAuthorModel= require("../models/newAuthorModel")

const createNewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({data: authorCreated})
}


module.exports.createNewAuthor= createNewAuthor