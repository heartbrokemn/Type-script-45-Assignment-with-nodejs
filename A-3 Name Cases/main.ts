// Assignment 2
let personname : string = "Shoaib Khan ";
// lowercase 
console.log("lowercase:",personname.toLowerCase());
// uppercase
console.log("uppercase:", personname.toUpperCase());
// titlecase
console.log ( "Titlecase:", personname.replace (/\b\w/g,c=> c.toUpperCase()));