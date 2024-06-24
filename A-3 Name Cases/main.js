// Assignment 2
var personname = "Shoaib Khan ";
// lowercase 
console.log("lowercase:", personname.toLowerCase());
// uppercase
console.log("uppercase:", personname.toUpperCase());
// titlecase
console.log("Titlecase:", personname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
