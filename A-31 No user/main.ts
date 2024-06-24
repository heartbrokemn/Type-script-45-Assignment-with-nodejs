let userName =[ "Shoaib",'Shahzain','Huzaifa ']
userName = []
if ( userName.length == 0){
    console.log('your array is empty plz provide some user');
    
}
else { userName.forEach(oneUser =>{
    if(oneUser== "Shahzain"){
        console.log(`Hello ${oneUser}, would you like to see  a status report `);
        
    }else{
        console.log(`Hello${oneUser}, thank you for login again `)
        
    }
})}