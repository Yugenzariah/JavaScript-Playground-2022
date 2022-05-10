/* Write a function that divides an array into sub arrays based on n number giving
Where n is the length of each sub array.*/ 

/* 
subarrays ([1,2,3,4,5,6,7,8,9,10],2) -> [[1,2],[3,4],[5,6],[7,8],[9,10]]
*/ 

function subarrays(arr,n) {
    let x = []
    let y = []

    for (let i = 0; i < arr.length; i++) {
        x.push(arr[i])
        if(x.length % n === 0) {
            y.push(x)
            x = []
        }
        else {
            y.push(x) 
        }
        return [... new Set(x)]
    }
} 

/* Create a function that takes two arrays of numbers and return an array of numbers
which are common to both given arrays */ 

// Returns an array of numbers that are common in the two arrays given 
function arrCommon(arr, arr2) {
    finalArr = []
    // Loops through the first array
    for (let i = 0; i < arr.length; i++) {
        // Checks if the item is in the other array
        if (arr2.includes(arr[i])) {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}
console.log(arrCommon([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 8, 9, 10]))
// returns [1, 3, 5, 7, 8, 9, 10] 