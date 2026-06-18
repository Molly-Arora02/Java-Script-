let msg = " I hate you !. dont call me";
console.log(msg)
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())
console.log(msg.trim()) // removes whitespace from both ends of the string
console.log(msg.replace("hate", "love")) // replaces the first occurrence of "hate" with "love"
console.log(msg.replaceAll(" ", "-")) // replaces all occurrences of " " with "-"
console.log(msg.slice(2, 6)) // extracts a portion of the string from index 2 to 6 (not including 6)
console.log(msg.substring(2, 6)) // similar to slice but does not accept negative indices
console.log(msg.charAt(5)) // returns the character at index 5
console.log(msg.indexOf("you")) // returns the index of the first occurrence of "you"
console.log(msg.lastIndexOf("you")) // returns the index of the last occurrence of "you"
console.log(msg.includes("call")) // checks if "call" is present in the string
console.log(msg.startsWith(" I")) // checks if the string starts with " I"
console.log(msg.endsWith("me")) // checks if the string ends with "me"
console.log(msg.split(" ")) // splits the string into an array of substrings based on the space character
console.log(msg.concat(" Please.")) // concatenates " Please." to the end of the string

// to operate operations together 
str = "   Hello, World!   ";
console.log(str.trim().toUpperCase()); // removes whitespace and converts to uppercase