// destructive methods modify the original string
let str = " HEllo World";
str = str.toUpperCase(); // modifies the original string
console.log(str); // " HELLO WORLD"
str.substring(4) // returns "o World"
str.substring(0,5) // returns " HEll"
str.substring(2,2) // returns "" (empty string)
str.substring(5,2) // returns "llo" (swaps the indices) it happens when the first index is greater than the second index, it swaps them to ensure a valid substring extraction.

let newstr = " this is my dog";
 //tnewstr = newstr.replace("dog", "cat"); // modifieshe original string
console.log(newstr); // " this is my cat"
console.log(newstr.indexOf('dog')); // returns -1 because "dog" is not found in newstr
//console.log(newstr.indexOf('cat')); // returns 14 because "cat" is found at index 14 in newstr

console.log(str.replace("HELLO", "HI")); // returns " HI WORLD" but does not modify the original string