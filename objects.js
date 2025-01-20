
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

person.age = 31;
console.log(person.age)


for (var variable in person) {
    console.log(variable);  
  }


/*
var person = new Object();

// Assign fields to object "person"
person.firstName = "John";
person.lastName = "Doe";

// Assign a method to object "person"
person.sayHi = function() {
  console.log("Hi! " + this.firstName + " " + this.lastName);
}

person.sayHi();  // Call the method in "person"
*/