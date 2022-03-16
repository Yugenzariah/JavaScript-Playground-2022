//TODO 
/*
JavaScript Variables
*/
var fullName = "Keith Cayatoc"
var classCode = 503

console.log(fullName)
console.log(classCode) 

// JavaScript Objects

var full_name = 
{
first_name: "Keith",
last_name: "Cayatoc",
course_number: 503
}

console.log(full_name)
console.log(full_name.first_name)
console.log(full_name["last_name"])

//JavaScript Functions

function addTwoNumbers(num1, num2){
return num1+num2
}
console.log(addTwoNumbers(2,3))

function addThreeNumbers(num1, num2, num3) {
return num1+num2+num3
}

console.log(addThreeNumbers(17,15,24))

//JavaScript loops
for(var i=0; i< 10; i++){
    console.log(i)
}

//JavaScript if statements
var number = 10
if (number === 10){
    console.log("answer = " + number)
}
    else {
    console.log("error")
}

// const and let statements
let num = 3
console.log(num) 

num = "Azariah"
console.log(num)

//JavaScript comments

/**
This is 
a multiple line comment
*/

var sdv503 = "JavaScript"

var x = 3 

var fullName = "text"

//foo(x,y)

function foo(p1, p2){
    return p2 - p1 
}

foo(5, 10) 

function sum(x1, x2){
    return x1 + x2
}

sum(10, 3) 

// (=) vs (===)

//statements vs expressions
var numbers 

//statement
// var x 

// if (y >= 0) {
//     x = y 
// } else{
//     x = -y
// }
// function statements (x) {
//     if(y >= 0){
//     return x = -y
//     } else{
//         return x = -y
//     }
// }

//expression ES6

// var x = y >= 0 ? y : -y 

var word = "Azariah Keith Jhaeron Maing Ambaked Cayatoc" 
console.log(word.length)

var obj = {} 
console.log(obj)

obj.foo = 190
console.log(obj)
console.log(word.toUpperCase())

//JavaScript values (primitives vs objects)

var obj1 = {}
var obj2 = {}

console.log(obj1 === obj2)

var number_one = 123 
var number_two = 123

console.log(number_one === number_two)

// Boolean: true and false
// Numbers: 1234, 1432.4
// Strings: 'letters', "letters"
// non-values: null and undefined 

var str = "Azariah"
console.log(str.length = 2)
console.log(str.length)

var numbers = [1, 2, 3, 4, 5]
console.log(numbers[0] = 10)
console.log(numbers)

//non values (missing information)
var nonvalue
console.log(nonvalue)

// function nonvalue(x) {
// return x
// }

// console.log(nonvalue())

var value = {}
console.log(typeof value)

//if (value === undefined || value === null

// false is no value, 0 is an empty string, '' is a reserved keyword, NaN is not a number