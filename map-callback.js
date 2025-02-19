const numbers = [1,2,3,4,5];

// Simple
// console.log("forEach loop ******************");
numbers.forEach((number) => {
    console.log(number);
})


// This func while using forEach is creating our own version of map
// When you want a new transformed array using map is more concise
// When you want to modify the original array without creating a new one use forEach

const map2 = (arr, callback) => {
    const changedArr = []

    arr.forEach((e) => {
        changedArr.push(callback(e))
    })

    return changedArr
}

// Create new arrays
const doublearray = map2(numbers, (x) => x * 2);
const triplearray = map2(numbers, (x) => x * 3);

console.log (doublearray)
console.log (triplearray)
// This time the anon func assigned to triplearray is the callback function 
