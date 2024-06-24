let usersName = [ "Shoaib",'Shahzain','Huzaifa']
usersName.forEach(oneUser=>{
    if ( oneUser == "admin "){
        console.log(`Hello ${oneUser}, would you like to see status report?`);
        
    }else{
        console.log(`Hello ${oneUser}, thank you for login in again `);
        
    }
})