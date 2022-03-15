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