// functions in java script 
// function declaration
function say(){
console.log("hello from function "); // function definition
}
// say() // function call or function invocation

// function with parameter
function sayHello(name){
console.log("hello " + name);
}
sayHello("Alice");


// example

function add(x,y){
let res = x + y;

console.log("the sum is " + res);
}
add(5, 3); // function call with arguments

// function with return value
function multiply(a,b){
return a * b; // return statement
}
let result = multiply(4, 6);
console.log("the product is " + result);

// arrow function
const greet = (name) => {
console.log("Hello, " + name + "!");
};
greet("Bob");

// function expression
const square = function(num) {
return num * num;
};
console.log("the square of 5 is " + square(5));

// arrow function with implicit return
const cube = num => num * num * num;
console.log("the cube of 3 is " + cube(3));
// function with default parameters
function greetUser(name, greeting = "Hello") {
console.log(greeting + ", " + name + "!");
}
greetUser("Charlie");
greetUser("Charlie", "Hi");


