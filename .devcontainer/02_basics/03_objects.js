// singleton

//Object.create

// object literals

const mySymb = Symbol("key1")

const JsUser = {
    name: "Ravi",
    "full name": "Ravi Chaudhary",
    age: 30,
    [mySymb]: "Mykey1",
    location: "changdigarh",
    email: "ravi@gmail.com",
    usLoggedIn: false,
    lasLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySymb]);


JsUser.email = "ravi@yahoo.in"
//Object.freeze(JsUser) // not update next value

JsUser.eamil = "ravi@chagpt.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

