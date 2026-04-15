//  Primitive

//  7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects(object master and browser web events for master in JS), Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack (Premitive) Meet a copy original value not changed , Heap memory (Non -premitive) meet a reference (changes to the original value)


let myYoutubename = "rivsdotcom"

let anothrname = myYoutubename

anothrname = "coffee aur code"

console.log(myYoutubename);
console.log(anothrname);

let userOne = {
    email: "user.google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ravi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

