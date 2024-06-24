let currentUser = [ "Shoaib",'shahzain', 'Huzaifa',"ahmad"]
let newUser = [" shoaib ", 'ali', 'alishba ','ayan' ]
newUser.forEach(newoneUser =>{
    let ourConditon  = currentUser.some(currentoneUser=> currentoneUser.toLowerCase()===newoneUser.toLowerCase())
    if ( ourConditon){
        console.log(`sory ${newoneUser} is already takken `);
        
    }else{
        console.log(`this username ${newoneUser} is available `);
        
    }
})