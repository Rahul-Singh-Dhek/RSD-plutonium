function printDate(){
    const day= new Date();
    const dd=day.getDate();
    const mm=day.getMonth()+1;
    const yyyy=day.getFullYear();
    console.log("Current Date is ---> " , dd,"/",mm,"/",yyyy);
}


function printMonth(){
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 const a = new Date();
 let month = a.getMonth();
 for(let i=0;i<months.length;i++){
    if(month===i){
 console.log("current month is ---> ", months[i]);
}
 }
}


function getBatchInfo(){
    console.log("Plutonium, W3D5, the topic for today is Nodejs");
}

module.exports.myCurDate=printDate;
module.exports.myCurMonth=printMonth;
module.exports.myBatchInfo=getBatchInfo;