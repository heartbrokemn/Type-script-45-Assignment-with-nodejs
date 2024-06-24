var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Assignment 18
//Store the location in Array 
//original Order 
var placesToVisit = ['Pakistan', 'Tokyo', 'America', 'China ', 'Japan'];
console.log("original Order :", placesToVisit);
//Alphabetic Order 
console.log("Alphabetic Order:", __spreadArray([], placesToVisit, true).sort());
//show that the array is still in its original order 
console.log("Original order After Sorting:", placesToVisit);
//Reverse Alphabetic Order 
console.log("Reverse Alphabetic Order:", __spreadArray([], placesToVisit, true).sort().reverse());
//Show that the Original order 
console.log("Original order after sorting:", placesToVisit);
//reverse order 
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
//Reversed the order of the list again to get back to the original order 
placesToVisit.reverse();
console.log("Back to Original Order :", placesToVisit);
//sort the array in reverse alphabetic order 
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);
