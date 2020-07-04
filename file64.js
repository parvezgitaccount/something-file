// this viltion modiul modiul system file

const fs = require("fs");
let text = fs.readFileSync("delte.txt", "utf-8");
text = text.replace("is", "designer");

console.log("this is say the web developer")
console.log(text);
console.log("creating a new file")
fs.writeFileSync("designer.txt", text);