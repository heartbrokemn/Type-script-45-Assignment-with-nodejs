//Assignment 18
//Store the location in Array 
//original Order 
let placesToVisit:string [ ]=['Pakistan','Tokyo','America','China ', 'Japan']
console.log("original Order :",placesToVisit);
//Alphabetic Order 
console.log("Alphabetic Order:", [...placesToVisit].sort());
//show that the array is still in its original order 
console.log("Original order After Sorting:",placesToVisit);
//Reverse Alphabetic Order 
console.log("Reverse Alphabetic Order:", [...placesToVisit].sort().reverse());
//Show that the Original order 
console.log("Original order after sorting:",placesToVisit);
//reverse order 
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
//Reversed the order of the list again to get back to the original order 
placesToVisit.reverse();
console.log("Back to Original Order :", placesToVisit);
//sort the array in reverse alphabetic order 
placesToVisit.sort((a,b)=>b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:",placesToVisit);