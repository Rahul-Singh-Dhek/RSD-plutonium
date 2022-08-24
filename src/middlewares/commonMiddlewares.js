
const globalMid = function (req, res, next) {
    let date = new Date();
    let day = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    date = day + " " + time;
    let ip = req.socket.remoteAddress
    let route = req.originalUrl;
    console.log(date + " " + "," + " " + ip + " " + "," + " " +route)
    next();
}

const mid1 = function (req, res, next) {
    req.falana = "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4 = function (req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3
module.exports.mid4 = mid4
module.exports.globalMid = globalMid

