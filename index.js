var a = 200;
{
  var a = 100;
  console.log(a); // 100
}
console.log(a); // 100
// a is created and assigned 200.
//Inside the block, var a = 100 does not create a new variable.
//It simply changes the existing a to 100.
//Therefore both console.logs print 100.

// but not in case of let and const 
let b = 200; // script scope 
{
  let b = 100;
  console.log(b); // 100

} // it will destroy the block scope and b will be 200 again

console.log(b); // 200
// b is created and assigned 200.
//Inside the block, let b = 100 creates a new variable b that is scoped to the block.
//Therefore the first console.log prints 100, while the second console.log prints 200.

let x = 10 ;
let y = 20 ;

if (true){
  console.log(x); // 10
  console.log(y); // 20
}
// x and y are created and assigned 10 and 20 respectively.
//Inside the block, we can access x and y because they are in the same scope.
//Therefore both console.logs print 10 and 20 respectively.
if (true){
  let x = 30 ;
  console.log(x); // 30
  console.log(y); // 20
}

// string template literals
let name = "Molly";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Molly and I am 21 years old.

`This is a multi-line string.
It can span multiple lines without needing special characters.`
`I counted ${2 + 3} apples.`; // Output: I counted 5 apples.


let product = "laptop";
let price = 999.99;
console.log(`The price of the ${product} is $${price}.`);
// Output: The price of the laptop is $999.99.

// string methods 
// they help us manipulate and work with strings in various ways, such as changing case, searching for substrings, and more.

// methods are built-in functions that can be called on string values to perform specific operations or transformations. Here are some commonly used string methods in JavaScript:

// methods are of two types - destructive and non-destructive methods. Destructive methods modify the original string, while non-destructive methods return a new string without changing the original one.

