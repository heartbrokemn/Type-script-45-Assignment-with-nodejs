var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var onenumbers = numbers_1[_i];
    var ordinalEnding = void 0;
    if (onenumbers === 1) {
        ordinalEnding = "st";
    }
    else if (onenumbers === 2) {
        ordinalEnding = 'nd';
    }
    else if (onenumbers === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(onenumbers).concat(ordinalEnding));
}
