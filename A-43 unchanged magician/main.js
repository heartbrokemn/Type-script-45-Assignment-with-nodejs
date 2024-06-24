function showMagician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function makegreat(magician) {
    return magician.map(function (names) { return "The GReat ".concat(names); });
}
var magicianName = ["Harry potter ", " Hamza ", "Usman "];
var copMagicianName = magicianName.slice();
var copygreat = makegreat(copMagicianName);
showMagician(magicianName);
showMagician(copygreat);
