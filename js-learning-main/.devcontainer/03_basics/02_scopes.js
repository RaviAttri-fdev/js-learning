// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


{}  // scope

//var c = 300

let a = 300

if (true){
    let a = 10
    const b = 20
    //console.log("Inner:", a);
}
//console.log("Outside:", a);
 //console.log(b);
 //console.log(c);


 
//nested scope : child can access parent value but parent cannot access child value

function one () {
    const username = "ravi"
    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);
    
    two()
}

//one ()

if (true){
    const username = "ravi"
    if(username === "ravi"){
        const website = " youtube"
    //  console.log(username + website);
    }
    //console.log(website);
    
}

//console.log(username);


// +++++++++++ important +++++ hueisting

console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5)   // cannot declare because holding value to const
const addTwo = function(num){
    return num + 2
}

