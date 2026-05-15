// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// MM DD YY
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-13-1989")

console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());
// `${newDate.getDay()}`

newDate.toLocaleString('default', {
    weekday: "long"
})