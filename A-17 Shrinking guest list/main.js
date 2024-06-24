//Assignment 17 
// initial list of guest 
var guests = ["Shoaib", 'Shahzain', 'Huzaifa', 'Saleem '];
// Informing that only two people can be invited.
console.log("Due to limited space , only two people can be invited for dinner.");
////Removing 
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("Sorry , ".concat(removedguest, ", you are no longer invited to dinner ."));
}
//printing invitation to the remaining two guests: 
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", you are invited to the dinner"));
});
//removing last two name from the list 
guests.pop();
guests.pop();
console.log("final guest list :", guests);
