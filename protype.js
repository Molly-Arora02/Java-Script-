const person = {
  name: "John",
  age: 30,
  city: "New York",
  favColor: ["blue" , 'green' , 'red']

}
const p1 = Object.create(person);
p1.name = "Alice";
p1.age = 25;
p1.city = "Los Angeles";
p1.favColor = ["yellow" , 'pink' , 'purple'];

console.log(p1.name); // Output: Alice
console.log(p1.age); // Output: 25
console.log(p1.city); // Output: Los Angeles
console.log(p1.favColor); // Output: ["yellow" , 'pink' , 'purple']

console.log(p1) // Output: { name: "Alice", age: 25, city: "Los Angeles", favColor: ["yellow" , 'pink' , 'purple'] }
const p2 = Object.create(p1);
p2.name = "Bob";
p2.age = 35;
p2.city = "Chicago";
p2.favColor = ["orange" , 'brown' , 'black'];

console.log(p2.name); // Output: Bob
console.log(p2.age); // Output: 35
console.log(p2.city); // Output: Chicago
console.log(p2.favColor); // Output: ["orange" , 'brown' , 'black']

// here what is happening is that p1 is created from person and p2 is created from p1. So p2 has access to all the properties of p1 and person. If we try to access a property that is not defined in p2, it will look for it in p1 and then in person. This is called prototype chaining.
// this is how inheritance works in JavaScript. When we create an object using Object.create(), the new object inherits the properties and methods of the object passed as an argument. In this case, p1 inherits from person and p2 inherits from p1. This allows us to create a chain of objects that share properties and methods, making it easier to manage and reuse code.

// if we try to access a property that is not defined in p2, it will look for it in p1 and then in person. This is called prototype chaining. This is how inheritance works in JavaScript. When we create an object using Object.create(), the new object inherits the properties and methods of the object passed as an argument. In this case, p1 inherits from person and p2 inherits from p1. This allows us to create a chain of objects that share properties and methods, making it easier to manage and reuse code.
// protype is the mechanism through which JavaScript implements inheritance.

// underscore property is a convention used to indicate that a property is private and should not be accessed directly from outside the object. It is not a language feature, but rather a naming convention that developers use to signal that a property is intended for internal use only. In JavaScript, all properties are public by default, so using an underscore prefix is a way to communicate that a property should be treated as private. However, it is still possible to access and modify these properties from outside the object, so it is up to the developer to respect the convention and avoid using them directly.

//example 
const p3 = Object.create(p2);
p3.name = "Charlie";
p3.age = 40;
p3.city = "Houston";
p3.favColor = ["white" , 'gray' , 'silver'];
p3._privateProperty = "This is a private property";
console.log(p3.name); // Output: Charlie
console.log(p3.age); // Output: 40
console.log(p3.city); // Output: Houston
console.log(p3.favColor); // Output: ["white" , 'gray' , 'silver']
console.log(p3._privateProperty); // Output: This is a private property
console.log(person.__proto__); // Output: [Object: null prototype] {}

//underscore mechanism is a convention used to indicate that a property is private and should not be accessed directly from outside the object. It is not a language feature, but rather a naming convention that developers use to signal that a property is intended for internal use only. In JavaScript, all properties are public by default, so using an underscore prefix is a way to communicate that a property should be treated as private. However, it is still possible to access and modify these properties from outside the object, so it is up to the developer to respect the convention and avoid using them directly.