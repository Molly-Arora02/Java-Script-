// console.log(a) // cannot access due to dead temporal zone until its line of declaration 
let a = 300;

fun();
function fun(){
console.log(a);
console.log("Inside fun");
}