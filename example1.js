var a = 100;

function fun (){
console.log("the value of a is " + a);
console.log("Inside fun");
}
fun(); // output: the value of a is 100

// execution context is created when the function is called and it has access to the variables in its scope, including global variables. In this case, the variable 'a' is defined in the global scope, so it is accessible inside the function 'fun'. When 'fun' is called, it logs the value of 'a' and then logs "Inside fun".
//execution phase has two phases : creation phase and execution phase. In creation phase, the function is created and the variable 'a' is hoisted to the top of the scope. In execution phase, the function is executed and it has access to the variable 'a' which is defined in the global scope.
// memory allocation for the variable 'a' happens during the creation phase, and it is assigned the value of 100. When the function 'fun' is called, it accesses the value of 'a' from memory and logs it to the console.

// global scope is  anything that is not inside the function scope 


var b = 100;

function fun(){
  console.log(b);
  console.log("Inside Fun");
}
fun();
// after execution the code gets destroyed 