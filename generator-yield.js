// Notice the * after the function keyword


function* incrementingGenerator() {
    let value = 0;
    while (true) {
        yield value++;
    }
}

const generator = incrementingGenerator();

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
