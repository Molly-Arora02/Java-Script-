//REPL - Read Evaluate Print Loop

console.log(1+2)
console.log(typeof (1+2))
//PEMDAS - Parentheses, Exponents, Multiplication and Division, Addition and Subtraction
console.log(1+2*3) // 7
console.log((1+2)*3) // 9
console.log(10/2+5) // 10
console.log(10/(2+5)) // 1.4285714285714286

// Number data type in JavaScript
let num1 = 10; // integer
let num2 = 3.14; // float
let num3 = -5; // negative number
let num4 = 0; // zero

console.log(num1, num2, num3, num4);
console.log(typeof num1, typeof num2, typeof num3, typeof num4);

// Number methods
console.log(num2.toFixed(1)); // rounds to 1 decimal place
console.log(num2.toFixed(2)); // rounds to 2 decimal places
console.log(num2.toPrecision(3)); // formats to 3 significant digits

// Converting strings to numbers
let strNum = "42";
let convertedNum = Number(strNum);
console.log(convertedNum, typeof convertedNum);

// Converting numbers to strings
let numToStr = 100;
let convertedStr = String(numToStr);
console.log(convertedStr, typeof convertedStr);

// Checking if a value is NaN (Not a Number)
let notANumber = "hello" * 2; // results in NaN
console.log(notANumber, isNaN(notANumber)); // true

// Infinity and -Infinity
let positiveInfinity = 1 / 0;
let negativeInfinity = -1 / 0;
console.log(positiveInfinity, negativeInfinity); // Infinity -Infinity\


console.log(Number.MAX_VALUE); // largest possible number
console.log(Number.MIN_VALUE); // smallest possible number (closest to zero)
console.log(Number.MAX_SAFE_INTEGER); // largest safe integer
console.log(Number.MIN_SAFE_INTEGER); // smallest safe integer
console.log(typeof Number.MAX_VALUE, typeof Number.MIN_VALUE, typeof Number.MAX_SAFE_INTEGER, typeof Number.MIN_SAFE_INTEGER); // all are of type 'number'
