function myName (){
    console.log("R");
    console.log("a");
    console.log("v");
    console.log("i");
}

//myName()

// function addTwoNumbers(number1, number2){   //number1 , number2 are parameters
//  console.log( number1 + number2 );
// }

// const result = addTwoNumbers(4, 6)  // 4,6 are arguments

// console.log("result: ", result);

function addTwoNumbers(number1, number2){   //number1 , number2 are parameters
    // let result = number1 + number2
    // return result
    // console.log("Ravi");  after return never print, not execute
    return number1 + number2
}

const result = addTwoNumbers(4, 6)  // 4,6 are arguments

// console.log("result: ", result);

function loginUserMessage(username = "sandy"){
    if(username === undefined){   // or  if(!username){ her ! is same as ===
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ravi"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){  // ... is rest operator
    return num1

}
//console.log(calculateCartPrice(200, 400, 500, 2000, 150));

const user = {   // through object 
    username: "ravi",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({   // through arguments
    username: "sam",
    price: 199
})


const myNameArray = [200, 400, 100, 600]

function returnSecondVlue(getArray){
    return getArray[1]
}

// console.log(returnSecondVlue(myNameArray));
console.log(returnSecondVlue([200, 400, 500]));


// scope

