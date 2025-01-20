const numbers = [1,2,3,4,5];

// for loop for fine grainged control or need to exit on condition
console.log("for loop ******************");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    // example of breaking early
    if (numbers[i] === 3) break;
}

// execute a provided function for each array element, ideal for when you want side effects like logging
console.log("forEach loop ******************");
numbers.forEach((number) => {
    console.log(number);
})

// when you need to transform an array into another array
console.log("map loop ******************");
const doubled = numbers.map((number) => {
    return number * 2;
})

console.log(doubled);
