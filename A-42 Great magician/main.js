function showMagician(magician) {
    magician.forEach(function (names) { return console.log(names); });
}
function makegreat(magician) {
    return magician.map(function (name) { return "The great ".concat(name); });
}
var magicianName = [' Harry Poter ', "Hamza ", " Usman "];
var greatMagician = makegreat(magicianName);
// console.log(greatMagician);
showMagician(greatMagician);
