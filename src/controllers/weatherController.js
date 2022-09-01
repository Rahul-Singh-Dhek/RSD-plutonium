const axios = require("axios")
//-------------------------------------------Assignment/Axios Qusetion 2---------------------------------------------------------------


let weather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let options
        let result = []
        for (let city of cities) {
            options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8483e59d8860872343402229a619f6f7`
            }
            let my = await axios(options);
            result.push({ city: city, temp: my.data.main.temp });
        }
        res.status(200).send({ data: result.sort((a, b) => a.temp - b.temp),status:true })
    }
    catch (err) {
        res.status(500).send({ Error: err.message,status:false })
    }
}

module.exports.weather = weather
//---------------------------------------------------------------------------------------------------------------------------------------
