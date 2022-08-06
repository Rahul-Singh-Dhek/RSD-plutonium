function trim(){
    let str = "            Rahul Singh Dhek         "
    console.log("Text is ",str,"--->",str.trim());
}
function changetoLowerCase(){
    let str = "RAHUL SINGH DHEK"
    console.log("Text is ",str,"--->",str.toLowerCase());
}
function changeToUpperCase(){
    let str = "rahul singh dhek"
    console.log("Text is ",str,"--->",str.toUpperCase());
}
module.exports.mytrim=trim;
module.exports.myLowerCase=changetoLowerCase;
module.exports.myUpperCase=changeToUpperCase;
