var currentUser = ["Shoaib", 'shahzain', 'Huzaifa', "ahmad"];
var newUser = [" shoaib ", 'ali', 'alishba ', 'ayan'];
newUser.forEach(function (newoneUser) {
    var ourConditon = currentUser.some(function (currentoneUser) { return currentoneUser.toLowerCase() === newoneUser.toLowerCase(); });
    if (ourConditon) {
        console.log("sory ".concat(newoneUser, " is already takken "));
    }
    else {
        console.log("this username ".concat(newoneUser, " is available "));
    }
});
