    console.log("Hello World") 
    console.dir(document)
     console.table({first:"test",val:9});
     console.error("Service Unavailable")

     console.log("hello")
 var a = "hello"
 a
 console.log(a)


 window.alert("Put an alert message here");
 alert("Put an alert message here")
// alert("welcome");

 var myName = "Laurence";
 var myCourse = "JavaScript";
 console.log(myName);

 var myAge = 40;
console.log(myAge);

/*
 This is a multiple comment line
 that I can add. also called as a secret for web developers
 */

 var welcomemessage = ("Glad to have you here")
 console.log(welcomemessage) 
// I declared the welcome message to be "glad to have you here"

 var message; 
 console.log(message); 
 message = null;
 console.log(message);
 var myLight = false;
 console.log(myLight);
 myLight = true;
 if (myLight){
     console.log(myLight);
 }
 var score1, score2, score3, score4;
 var a = "Hello"; 
 var b = 10;
 var c = false;
 console.log(a);

/* const name = "SDV503" 
 console.log(name)
 name = "Keith"
console.log(name) This code cant run because of the first line of code "const name" it should be changed to "var". 
*/

 var name = "SDV503" 
  console.log(name)
  name = "Keith"
 console.log(name)

// 1. Local Scope (Block Scope and Function) - Living in a local scope
// 2. Global Scope - 

 const message = "Goodbye World" 
 console.log(message)

 if(true){

 const message = "Goodbye World"

 }

 console.log(message)

//Block Scope
 if(false){
     const message = "Goodbye World" 
     console.log(message)
 }
 console.log(message) 

//Function Scope
 function call() {
     var message = "Goodbye World" 
     console.log(message)
 }

 console.log(call())
 console.log(message)

//Global Scope
 var Message = "Goodbye World" 

 function readMessage(){
     console.log(Message)
 }

 console.log(readMessage())

//Function Declaration 
 function outerFunc() {
     var msg = "Hello World"
     function innerFunc() {
         console.log(msg)
     }
     console.log(innerFunc())
     }
     console.log(outerFunc())


//DataType
/*
numbers
boolean
strings
objects
*/

let a = 1 // a number DataType
let b = "Hello" // b is a string DataType
let c = true // c is a boolean DataType
let d; // d is undefined DataType 

 let sam = 1 + 1 // note: Do not use strings on numbers  
 console.log(sum)

 let tast = 100 / "2" 
 console.log(test)

 const value1 = '5';
 const value2 = 9;
 let sum = Number(value1) + value2;
 console.log(sum);

 let output = `The sum of value1 and value2 is ${sum}`
 console.log(output);

 let alphabet = "4"
 console.log(Number(alphabet))

 let str = "Keith Cayatoc"
 console.log(str)
 let str1 = "NMIT"
 console.log(str1)

 let fullStr = str + " " + str1
 console.log(fullStr) 

 let newStr = `Hello to my new string! My name is ${str} and I study at ${str1}`
 console.log(newStr)

//Boolean only two keywords which is true and false

 let bol = true
 console.log(bol)

 console.log( 5 > 3) 
// >= or <= or ==  
 let test = ["Hello", "Keith", 07, 2002] // Array DataType note: Index arrays always start with 0
 console.log(test[2])

 for(i=0; i<test.length; i++) {
  console.log(test[i])
 }

// Object DataType

let abc = {
    first: "a",
    second: "b",
    third: "c",
}

let weather = {
    sunny: "hot",
    cloudy: "mild",
    stormy: "wet",
    hurricane: "wish you were somewhere else",
    snowy: "freezing"
}

var Num = 1000000
var xyz = "Software Development"
let firstName = "Keith" 
let Keith = true
var Num2 = 3.142 
console.log(abc[2])
let newStr2 = `when there is a hurricane you ${weather.hurricane}`
console.log(newStr2)

/*what is a function?: A function is a sub program that can be called by code external to the function.
Like the program itself the function is composed of a sequence of statements called the function body values can be passed to a function 
and the function will return a value */ 

function div(num1, num2){
    return num1/num2
}

console.log(div(6, 3))

 function sums (num1, num2, num3, num4) {
     return num1 + num2 + num3 + num4
 }
 let num1 = 1
 let num2 = 2
 let num3 = 3
 let num4 = 4 
 let newSum = `The sum of ${num1} ${num2} ${num3} ${num4} = ${sums}`
 console.log(newSum) 

function fourNumbers(num1, num2, num3, num4) { 
 let result = num1 + num2 + num3 + num4 
 return `the sum of 4 numbers is ${result}`
}

console.log(fourNumbers(1, 2, 3, 4))
