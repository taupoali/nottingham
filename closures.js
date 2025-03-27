function createCounter() {
    let count = 0;  // Stored in heap due to closure

    return function increment() {
        count++;  // Still accessible
        return count;
    };
}

const counter = createCounter();  // `count` is created in the heap

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
