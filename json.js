// Creating a basic JavaScript object
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    hobbies: ["reading", "gaming", "hiking"]
};

// Display the JavaScript object
console.log("JavaScript Object:", user);






// Converting the JavaScript object to a JSON string
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// Simulate sending the JSON string to a server or storing it
// ...

// Receiving the JSON string back (e.g., from a server or localStorage)
const receivedJsonString = jsonString; // For this example, we'll just reuse the same string

// Converting the JSON string back to a JavaScript object
const parsedUser = JSON.parse(receivedJsonString);
console.log("Parsed JavaScript Object:", parsedUser);

// Accessing properties of the parsed object
console.log("User's Name:", parsedUser.name);
console.log("User's Hobbies:", parsedUser.hobbies);
