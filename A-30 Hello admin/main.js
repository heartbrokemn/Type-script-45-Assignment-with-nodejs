var usersName = ["Shoaib", 'Shahzain', 'Huzaifa'];
usersName.forEach(function (oneUser) {
    if (oneUser == "admin ") {
        console.log("Hello ".concat(oneUser, ", would you like to see status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for login in again "));
    }
});
