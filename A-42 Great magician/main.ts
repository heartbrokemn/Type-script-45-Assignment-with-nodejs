function showMagician ( magician:string []){
    magician.forEach( names =>console.log(names))
}
function makegreat  ( magician:string []){
   return magician.map( name  =>`The great ${name}` )
}
let magicianName = [ ' Harry Poter ', "Hamza ", " Usman "]

let greatMagician = makegreat (magicianName)
// console.log(greatMagician);

showMagician ( greatMagician)