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