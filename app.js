const { add2nums, add3nums} = require('./utils.js');
const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;

console.log(success("my first code!"))

console.log(add2nums(1, 2));
console.log(add3nums(1, 2, 3));

fruits = ["apple", "banana", "kiwi", "grapes"]
console.log(fruits)

// for loop
console.log(error("lets do a for loop to iterate over the list"));
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// test if grapes is in fruits
console.log("test if grapes is in fruits")
if (fruits.includes("grapes")) {
    console.log("grapes is in fruits");
} else {
    console.log("grapes is not in fruits");
}

const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);

// Arrow Function
const sum = (a, b) => a + b;

console.log(success(sum(3, 4))); // Output: 7


// Higher-Order Function
function operation(a, b, callback) {
    return callback(a, b);
}
    
function multiply(a, b) {
        return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(operation(5, 3, multiply)); // Output: 15
console.log(operation(10, 2, divide)); // Output 5

