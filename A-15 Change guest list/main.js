//Assignment 15
var guestaaray = ['Shahzain', 'Huzaifa', 'Muzammil'];
var cannotAttend = "Huzaifa";
console.log("".concat(cannotAttend, ", Can not attend the dinner"));
var newguest = "Shoaib";
guestaaray[guestaaray.indexOf(cannotAttend)] = newguest;
console.log(guestaaray);
guestaaray.map(function (items) { return console.log("Dear! ".concat(items, " You are invited to the Dinner")); });
