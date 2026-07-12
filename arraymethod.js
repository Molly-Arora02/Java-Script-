// push 
const fruits = ['Apple' , 'banana' , 'guava']
console.log(fruits);
//console.log(fruits.push(['papaya' , 'mango' , 'kiwi'])); 


fruits.push('papaya', 'mango', 'kiwi');

console.log(fruits);

// pop 
fruits.pop()
console.log(fruits)

fruits.unshift()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.splice(1, 0, 'grapes', 'orange')
console.log(fruits)

fruits.splice(1, 2)
console.log(fruits)

const newFruits = fruits.slice(1, 3)
console.log(newFruits)

const newFruits1 = fruits.slice(1)
console.log(newFruits1)

array1 = [1, 2, 3, 4, 5]
console.log(array1.join('--> '))
//Output: 1--> 2--> 3--> 4--> 5
// array.join is a method that joins all the elements of an array into a string, separated by a specified separator. In this case, the separator is '--> '. The output will be a string representation of the array elements joined together with the specified separator.

const array2 = [9, 0, 4, 8, 5]
console.log(array2.join('--> '))
//Output: 9--> 0--> 4--> 8--> 5
// array.join is a method that joins all the elements of an array into a string, separated by a specified separator. In this case, the separator is '--> '. The output will be a string representation of the array elements joined together with the specified separator.

const array3 = array1.concat(array2)
console.log(array3)
//Output: [1, 2, 3, 4, 5, 9, 0, 4, 8, 5]
// array.concat is a method that joins two or more arrays and returns a new array.

// include 
console.log(array1.includes(3))
//Output: true
// array.includes is a method that checks if an element exists in an array and returns a boolean value.
console.log(array2.indexOf(4))
//Output: 2
// array.indexOf is a method that returns the index of the first occurrence of an element in an array, or -1 if the element is not found.