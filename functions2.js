// other ways of writing a function

// function expression 

const square = function squareNum(n){
  return n*n;
}
console.log(square(5));


// arrow function 

const cube = (n)=>{
  return n*n*n
}
console.log(cube(3));

// other example

const cubes = n => n*n*n; // when you have only 1 parameter it is called ARROW FUNCTION IMPLICIT RETURN 
console.log(cubes(4));