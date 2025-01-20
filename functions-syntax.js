// Traditional Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow Function Syntax
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

// Arrow Function with Implicit Return (if it's a single expression)
const greetArrowShort = name => `Hello, ${name}!`;

// Calling the functions and logging the results
console.log("Traditional Function:", greet("Alice"));
console.log("Arrow Function:", greetArrow("Bob"));
console.log("Arrow Function Short Syntax:", greetArrowShort("Charlie"));





// Demonstrating the 'this' binding difference
const person = {
    name: "Dave",
    greetTraditional: function() {
        return `Hello from traditional function, ${this.name}!`;
    },
    greetArrow: () => {
        return `Hello from arrow function, ${this.name}!`;
    }
};

console.log(person.greetTraditional()); // This will work
console.log(person.greetArrow());      // This will not work as expected
