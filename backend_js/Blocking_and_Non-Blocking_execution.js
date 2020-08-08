// Synchronous or blocking
// :- line by line execution

// Asynchronous or Non-blocking
// :- line by line execution not guaranteed
// :- callbacks will fire

const fs = require("fs");
fs.readFile("abcd", "utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("this is shubham");
