const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    hobbies: ["reading", "gaming", "hiking"]
};

// Display the JavaScript object
//console.log("JavaScript Object:", user);
//console.log(user.email);

const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);
