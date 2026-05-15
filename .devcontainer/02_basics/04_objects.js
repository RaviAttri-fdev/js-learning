//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ravi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "ravi@gmail.com",
    userfullName: {
        firstName: "Rivs",
        lastName: "Attri"
    }
}

//console.log(regularUser.userfullName.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2) // .assign is used merge object from source to target

const obj3 = {...obj1, ...obj2} //spread method
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "ravi@gmail.com"
    },
    {
        id: 2,
        email: "ravi2@gmail.com"
    },
    {
        id: 3,
        email: "ravi3@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
