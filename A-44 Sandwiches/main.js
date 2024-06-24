function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Making A Sandwich  with the following items');
    items.forEach(function (singleItmes) { return console.log(singleItmes); });
    console.log("Now enjoy sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayo", " Egg");
makeSandwich("BRead", "Butter");
makeSandwich("chiken ", "Cheese", " Mayo ", " Butter", " Lettuce ", "Tomato ", "Galic ", "Bread");
