const axios = require("axios")
//-------------------------------------------Assignment/Axios Qusetion 3---------------------------------------------------------------

let memeMaker = async function (req, res) {
    try {
        let id = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password;

        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let my = await axios(options);
        res.status(200).send({ data: my.data, status: true });
    }
    catch (err) {
        res.status(500).send({ Error: err.message, status: false })
    }

}
module.exports.memeMaker = memeMaker
//---------------------------------------------------------------------------------------------------------------------------------------
