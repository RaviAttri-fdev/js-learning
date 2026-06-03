//if

// if (true){

// }

// if (false){

// }

// const temp = 41
// if (temp === 40){
//     console.log("less than 50");

// } else {
//     console.log("temp is greator than 50");
// }
// console.log("Execute");
//< , >, <=, >=, ==, != , ===


// const score = 200

// if (score > 100) {
//     const power = "fly"    //var is used then can be accessed outside, global scope
//     console.log(`user power: ${power}`);
    
// }
// console.log(`user power: ${power}`);


// short hand notation

const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");
// ;  //implicitely scope

// if (balance < 500) {
//     console.log("less than 500"); 
// } else if(balance < 750){
//     console.log("less than 750");
    
// }else if(balance < 900){
//     console.log("less than 900");
    
// }else{
//     console.log("Greator than 900");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}