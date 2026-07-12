// map is a higher order function it means it takes a function as an argument and applies it to each element of an array
// map function accepts a callback function as an argument and returns a new array with the results of calling the callback function on each element of the original array. The callback function takes three arguments: the current element, the index of the current element, and the array itself. The map function does not modify the original array, but instead creates a new array with the transformed elements.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const doubledNumbers = numbers.map((num) => num * num);
console.log(doubledNumbers);

const newNumbers = [1, 2, 3, 4, 5,6,7];

