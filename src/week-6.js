//     console.log("Hello World") 
//     // console.dir(document)
//     console.table({first:"test",val:9});
//     console.error("Service Unavailable")

//     console.log("hello")
// var a = "hello"
// a
// console.log(a)


// // window.alert("Put an alert message here");
// // alert("Put an alert message here")


// var myName = "Laurence";
// var myCourse = "JavaScript";
// console.log(myName);
// // alert("welcome");
// var myAge = 40;
// console.log(myAge);
// /*
// This is a multiple comment line
// that I can add. also called as a secret for web developers
// */

// var welcomemessage = ("Glad to have you here")
// console.log(welcomemessage) 
// // I declared the welcome message to be "glad to have you here"

// var message; 
// console.log(message); 
// message = null;
// console.log(message);
// var myLight = false;
// console.log(myLight);
// myLight = true;
// if (myLight){
//     console.log(myLight);
// }
// var score1, score2, score3, score4;
// var a = "Hello"; 
// var b = 10;
// var c = false;
// console.log(a);

// const name = "SDV503" 
// console.log(name)
// name = "Keith"
//console.log(name) This code can't run because of the first line of code "const name" it should be changed to "var". 

// var name = "SDV503" 
//  console.log(name)
//  name = "Keith"
// console.log(name)

// 1. Local Scope (Block Scope and Function) - Living in a local scope
// 2. Global Scope - 

// const message = "Goodbye World" 
// console.log(message)

// if(true){

// const message = "Goodbye World"

// }

// console.log(message)

//Block Scope
// if(false){
//     const message = "Goodbye World" 
//     console.log(message)
// }
// console.log(message) 

//Function Scope
// function call() {
//     var message = "Goodbye World" 
//     console.log(message)
// }

// console.log(call())
// console.log(message)

//Global Scope
// var Message = "Goodbye World" 

// function readMessage(){
//     console.log(Message)
// }

// console.log(readMessage())

//Function Declaration 
function outerFunc() {
    var msg = "Hello World"
    function innerFunc() {
        console.log(msg)
    }
    console.log(innerFunc())
    }
    console.log(outerFunc())
