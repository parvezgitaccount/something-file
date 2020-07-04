 // synchoronus and blocking js file
 // is linby cine execution 


 // asynchoronous or-blocking 
 // ling by line execution not guarnteed 
 // -callback wiil fire


 const fs = require("fs");
 fs.readFile("delte.txt", "utf-8", (data) => {
     console.log(data);
 });
 console.log("this is call callback function");