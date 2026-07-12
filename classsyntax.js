class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startCar() { 
    console.log(`The ${this.brand} ${this.model} is starting.`);
  }

  stopCar() {
    console.log(`The ${this.brand} ${this.model} is stopping.`);
  }

  // Getter
  get carInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }

  // Setter
  set carInfo(info) {
    const [brand, model, year] = info.split(" ");
    this.brand = brand;
    this.model = model;
    this.year = Number(year); // Good practice to cast numbers
  }

  // Static method
  static honk() {
    console.log("Beep beep!");
  }
} // <--- The Car class must close here

// Now you can extend it cleanly
class RacingCar extends Car {
  constructor(brand, model, year, topSpeed) {
    super(brand, model, year); // Calls the parent constructor
    this.topSpeed = topSpeed;
  }

  // Overriding the parent's startCar method
  startCar() {
    console.log(`The ${this.brand} ${this.model} is starting at a top speed of ${this.topSpeed} mph.`);
  }
}

// --- Execution ---
const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar);
myCar.startCar();
myCar.stopCar();

// Static methods are called on the Class itself, not the instance
Car.honk(); 

// Testing the subclass
const myRaceCar = new RacingCar("Ferrari", "488", 2023, 205);
myRaceCar.startCar(); // Outputs the overridden version with top speed