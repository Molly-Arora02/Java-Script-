function sum(a){
  if(!a) return 0;
  let ans = a ;
  function smallerSum(b){
   if(!b) return ans ;
   ans+=b ;
    return smallerSum ;
  }
  return smallerSum;
}
console.log(sum())
console.log(sum(10)())
console.log(sum(10)(20)())
console.log(sum(10)(20)(30)())
console.log(sum(10)(20)(30)(40)())

// here concepts of closure and currying are used to create a function that can be called multiple times with different arguments , and the final result is returned when the function is called with no arguments. The inner function smallerSum has access to the variable ans from the outer function sum.
// and uses most important concept of recursion to call itself  