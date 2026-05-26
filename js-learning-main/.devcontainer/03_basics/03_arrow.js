// arrow functions
 const user = {
    username: "Ravi",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        console.log(this);
         
    }
 }
 
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);


// normal function defination and calling
// function chai(){
//     let username = "ravi"
//     console.log(this.username);
// }
// chai()


// self calling function
// (function(){
//     let username = "ravi"
//     console.log(username);
// })();


// arrow function
// const chai = () => {
//     let username = "ravi"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,6));

// if () used then no return is uesd imlisit return, if {} is used then return explicitly used
//const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "ravi"})

// console.log(addTwo(3,6));
