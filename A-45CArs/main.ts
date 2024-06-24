function creatCar ( manufacturer, model, ...options){
    let car  = { 
        manufacturer:manufacturer,
        model:model
    };
    options.forEach(option =>{
        let [key , value ]= option.split(":")
        car[key.trim()]= value.trim();
    })
    return car ;
}
let my_car = creatCar ("toyota",'Corolla', "color:BLack","Sunroof: True");
console.log(my_car);