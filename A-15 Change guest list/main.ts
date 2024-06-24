//Assignment 15
let guestaaray:string []=[ 'Shahzain','Huzaifa','Muzammil']
let cannotAttend :string = "Huzaifa"
console.log(`${cannotAttend}, Can not attend the dinner`);
let newguest:string = "Shoaib";
guestaaray[guestaaray.indexOf(cannotAttend)]=newguest;
console.log(guestaaray);
guestaaray.map((items)=>console.log(`Dear! ${items} You are invited to the Dinner`))