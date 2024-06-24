//Assignment 16
let guestarray:string[]=[ 'Shoaib','Shahzain','Huzaifa','Muzammil'];
let cannotAttend :string = "Shoaib";
let newguest :string = "Mehaik";
guestarray[guestarray.indexOf(cannotAttend)]= newguest;
console.log(guestarray);
guestarray.map((items)=>console.log(`Dear ${items} I found a bigger dinner table so I am invited more peoples.`));
//part2
let guestbeg:string= "Moiz";
guestarray.unshift(guestbeg);
console.log(guestarray);

//part3
let middleguest:string= "Aliza"
let middleindex=guestarray.length/3
guestarray.splice(middleindex,0,middleguest)
console.log (guestarray) 
//part4
guestarray.push("Akbar")
console.log(guestarray);
// part5
guestarray.map ((items)=> console.log(`Dear! ${items}, You are Invited in the more people list on dinner `));
