let numbers = [ 1,2,3,4,5,6,7,8,9];
for (let onenumbers of numbers){
    let ordinalEnding:string;
    if ( onenumbers ===1 ){
        ordinalEnding = "st"
    }else if (onenumbers ===2){
ordinalEnding = 'nd'
    }
else if ( onenumbers === 3 ){
    ordinalEnding = 'rd'
}else{ ordinalEnding= "th"}
console.log(`${onenumbers}${ordinalEnding}`);

}

