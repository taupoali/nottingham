class Car {

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }

    accelerate(){
        // must use the this keyword to access the property
        this.speed++;
    }

}
var car = new Car("BMW", "5 series");
car.accelerate();


class SportsCar extends Car {
    constructor(make, model, turboBoost) {
        // call superclass constructor
        super(make,model);
        this.turboBoost = turboBoost;
    }
    // method overriding
    accelerate() {
        super.accelerate(); // call superclass method
        this.speed = this.speed * this.turboBoost;
    }
}

sportsCar = new SportsCar("Maserati", "4200", 4);
console.log(sportsCar.make)
sportsCar.accelerate();
console.log(sportsCar.speed);
