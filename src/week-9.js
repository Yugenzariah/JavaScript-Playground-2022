// Create a function that takes an array and return both the minimum and mix numbers in order

// findMinMax([1,2,3,4,5]) -> [1,5] 

function findMinMax(arr){
    let arr = []
    let min = arr[0] // 1
    let max = arr[0] // 5

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i]
        }
        if(arr[i] > max){ // it will stop looking for the max value when it returns false
            max = arr[i]
        }
    }
    array.push(min)
    array.push(max)

    return array
}

console.log(findMinMax([1,2,3,4,5])) 

// Create a function that concatenates a number of arrays together
// arraysConcat([1,2,3,4,5], [6,7,8,9]) -> [1,2,3,4,5,6,7,8,9]

function concatArray(...args) {
    return [].concat(...args)
}

const concatArray = (...args) => args.flat(Infinity) // 2nd solution 

/* Create a function that takes an array of numbers, a string, and returns an array of numbers as
per the following rules: */ 
// ArrayRules([4,3,2,1], "Asc") -> [1,2,3,4]
// ArrayRules([5,6,7,8,9], "Des") -> [9,8,7,6,5]
// ArrayRules([4,3,2,1], "None") -> [1,2,3,4]

function ArrayRules(arr, str) {
    
switch (str) {
    case "Asc":
        return arr.sort((a,b) => a-b)
        break;

    case 'Des':
    return arr.sort((a,b) => b-a)

     default:
    return arr
}
}

// Create a function that returns the length of nested arrays
// nestedArrays([1,[2,3]]) -> 3
// nestedArrays([1,[2,[3,4]]]) -> 4

const nestedArrays = arr => arr.flat(Infinity).length
