// Define a base class called Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to make the animal speak
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Define a class called Dog that inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call the parent class constructor with the name parameter
        this.breed = breed;
    }

    // Override the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }

    // Add a new method specific to Dog
    getBreed() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

// Create an instance of an animal
const randomAnimal = new Animal('Generic Animal');
randomAnimal.speak();

// Create an instance of Dog
const myDog = new Dog('Rex', 'German Shepherd');

// Call methods on the instance
myDog.speak();     // Output: Rex barks.
myDog.getBreed();  // Output: Rex is a German Shepherd.
