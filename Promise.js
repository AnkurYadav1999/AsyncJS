
function Register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Register End")
            resolve();
        },1000)
    }) 
 }

 function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Email end")
            resolve();
        },2000)
    })
 }

 function Login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login End")
            resolve();
        },3000)
    })
 }

 function GetUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Got User Data")
            resolve();
        },1000)
    })
 }

 function displayUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User data displayed")
            resolve();
        },1000)
    })
 }

 console.log("Other application work");



//  Register()
//  .then(sendEmail)
//  .then(Login)
//  .then(GetUserData)
//  .then(displayUserData)
//  .catch((Error)=>{
//     console.log("Error:",Error)
//  })