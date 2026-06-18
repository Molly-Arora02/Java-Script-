console.log(Math.random()); // generates a random decimal between 0 and 1
console.log(Math.random() * 10); // generates a random decimal between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1); // generates a random integer between 1 and 10
console.log(Math.ceil(Math.random() * 10)); // generates a random integer between 1 and 10
console.log(Math.round(Math.random() * 10)); // generates a random integer between 0 and 10
console.log(Math.floor(Math.random() * 100) + 1); // generates a random integer between 1 and 100
console.log(Math.floor(Math.random() * 1000) + 1); // generates a random integer between 1 and 1000
console.log(Math.floor(Math.random() * 10000) + 1); // generates a random integer between 1 and 10000

// all the above methods are used to generate random numbers in JavaScript. The Math.random() method generates a random decimal number between 0 (inclusive) and 1 (exclusive). By multiplying it with a number, we can scale it to a desired range. The Math.floor(), Math.ceil(), and Math.round() methods are used to round the generated random decimal to an integer.

// more maths random methods
console.log(Math.random().toString(36).substring(2, 15)); // generates a random alphanumeric string
console.log(Math.random().toString(36).substring(2, 10)); // generates a shorter random alphanumeric string
console.log(Math.random().toString(36).substring(2, 8)); // generates an even shorter random alphanumeric string
console.log(Math.random().toString(36).substring(2, 6)); // generates a very short random alphanumeric string
