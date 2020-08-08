const fs = require("fs");
const text = fs.readFileSync("abcd", "utf-8");
const { log } = require("console");
console.log(text);