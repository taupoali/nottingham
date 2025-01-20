const chalk = require('chalk')
const Car = new Array(3);

Car[0] = "Ford";
Car[1] = "Toyota";
Car[2] = "Honda";

/* for (let i = 0; i < Car.length; i++) {
    console.log(Car[i]);
}
*/

function fancywrite (sometext){
    console.log(chalk.red.inverse(sometext))
}

//Car.forEach(item => {console.log(item)})
Car.forEach(fancywrite)

