// FUNCTION CAN BE TREATED AS A VALUE ALSO CALLED FIRST CLASS FUNCTION

function fun() {

  function innerFun(){
    console.log("INNER FUN");
  }

  return innerFun;
}
const f = fun();

console.log(f);  // [Function: innerFun] 

function fun() {

  function innerFun(){
    console.log("INNER FUN");
  }

  return innerFun;
}
const v = fun();

console.log(v);
v(); // INNER FUN 

