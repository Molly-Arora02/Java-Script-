const person = {
  name: "John",
  age: 30,
  city: "New York",
  favColor: ["blue" , 'green' , 'red'],
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  } 
};