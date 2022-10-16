// just a synctactic sugar for promises

function Register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Register End")
            resolve('success');
        },1000)
    }) 
 }

 function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // return reject("error while sending email")
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

 async function Auth(){

        try{
        await Register(); // it returns the data which is passed in resolve
        await sendEmail();
        await Login();
        await GetUserData();
        await displayUserData();
        }catch(err){
            console.log(err)
            throw new Error() //throwing error in auth now .then will not work and use .catch
        }
 }

 Auth().then(()=>{
    console.log("All set")
 })  .catch((err)=>{
    console.log(err);
 });