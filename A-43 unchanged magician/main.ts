function showMagician ( magician:string []){
    magician.forEach    ( name =>console.log(name)
    )
}
function makegreat( magician:string [ ]){
   return magician.map ( names =>`The GReat ${names}`)
}

let magicianName  = [ "Harry potter "," Hamza ", "Usman "]
let copMagicianName  = magicianName.slice()
let copygreat = makegreat(copMagicianName)
showMagician( magicianName)
showMagician(copygreat);