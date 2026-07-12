// call back function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous programming and can be used to handle events, perform actions after a delay, or process data once it is available.

// Example of a callback function
function cb(){
    console.log("Callback function executed");
}
function fun(f) {
  console.log("Function executed");
  f();
}
fun(cb); // Output: Function executed
// Callback function executed

// Example of a callback function with parameters
function cbWithParams(name){
    console.log("Hello " + name);
}
function funWithParams(f, name) {
  console.log("Function executed");
  f(name);
}
funWithParams(cbWithParams, "John"); // Output: Function executed
// Hello John

// Example of a callback function with asynchronous operation
function asyncOperation(callback) {
  setTimeout(function() {
    console.log("Asynchronous operation completed");
    callback();
  }, 2000);
}
asyncOperation(function() {
  console.log("Callback function executed after asynchronous operation");
}); // Output: Asynchronous operation completed
// Callback function executed after asynchronous operation