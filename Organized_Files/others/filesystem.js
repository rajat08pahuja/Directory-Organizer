// nodejs --> modules --> functionalities
// language --> logic
let fs = require("fs");
let buffer = fs.readFileSync("f1.txt" , "utf-8");
console.log(buffer);