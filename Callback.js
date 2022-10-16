/** 
 1. Register
 2. Send Welcome Email
 3. Login
 4. Get User Data
 5. Display User Data
 */


 function Register(Callback){
    setTimeout(()=>{
        console.log("Register End")
        Callback()
    },1000)
 }

 function sendEmail(Callback){
    setTimeout(()=>{
        console.log("Email end")
        Callback()
    },2000)
 }

 function Login(Callback){
    setTimeout(()=>{
        console.log("Login End")
        Callback()
    },3000)
 }

 function GetUserData(Callback){
    setTimeout(()=>{
        console.log("Got User Data")
        Callback()
    },1000)
 }

 function displayUserData(){
    setTimeout(()=>{
        console.log("User data displayed")
    },1000)
 }

//  Callback Hell

 Register(function(){
    sendEmail(function(){
        Login(function(){
            GetUserData(function(){
                displayUserData();
            });
        });
    });
 });
 


 console.log("Other Application Work")
