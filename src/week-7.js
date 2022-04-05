//create a function that takes an array containing only numbers and return the first element.
//Example: getArrElement([1, 2, 3, 4]) -> 1

function getArrElement(arr){
    return arr[0]
}

console.log(getArrElement([1, 2, 3, 4]))

//error function

//const getArrElement = arr => arr[0]

//Give two arguement, return an array which contains these two arguments
// return means you are going to use "function"

function createArray(a, b){
    var arr = [a, b]

    return arr
}

console.log(createArray(1, 2)) 