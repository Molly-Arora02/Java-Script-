const square = num => num * num;
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const squaredNumbers = numbers.map(square);
console.log(squaredNumbers);
const squareRoot = num => Math.sqrt(num);
const squaredRootNumbers = numbers.map(squareRoot);
console.log(squaredRootNumbers);