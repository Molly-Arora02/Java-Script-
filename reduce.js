// reduce is a higher-order function that takes a callback function and an optional initial value as arguments. It applies the callback function to each element of an array, accumulating a single result. The callback function takes four arguments: the accumulator (the accumulated value from previous iterations), the current element, the index of the current element, and the array itself. The reduce function can be used to perform operations like summing numbers, concatenating strings, or flattening arrays.

const arr = [1, 2, 3, 4, 5];

// Example 1: Sum of all elements in the array
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum:', sum); // Output: Sum: 15

// Example 2: Product of all elements in the array
const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('Product:', product); // Output: Product: 120

// Example 3: Flattening an array of arrays
const nestedArr = [[1, 2], [3, 4], [5]];
const flattenedArr = nestedArr.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log('Flattened Array:', flattenedArr); // Output: Flattened Array: [1, 2, 3, 4, 5]

// Example 4: Counting occurrences of elements in an array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});
console.log('Fruit Count:', fruitCount); // Output: Fruit Count: { apple: 3, banana: 2, orange: 1 }

// example add prev + current value 
const numbers = [1, 2, 3, 4, 5];
const sumOfNumbers = numbers.reduce((prev, current) => prev + current, 0);
console.log('Sum of Numbers:', sumOfNumbers); // Output: Sum of Numbers: 15