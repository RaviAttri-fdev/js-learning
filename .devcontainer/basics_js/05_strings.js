const name = "Ravi" 
const repoCount = 1

//console.log(name + repoCount  + " value"); old format


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Ravi-chaudhary-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4) 
console.log(newString);


// const anotherString = gameName.slice(-2, 8)
// console.log(anotherString);


const newStringOne = "   ravi     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ravi.com/ravi%20chaudhary"
console.log(url.replace('%20', '-'));
 

console.log(url.includes('attri'));

console.log(gameName.split('-'));
