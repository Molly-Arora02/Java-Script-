function fun(name, age) {
  console.log(name);
  console.log(age);
  console.log(this);
}
fun('Molly', 21);

// binding this to a specific object
const obj = {
  name: 'Molly',
  age: 21
};
fun.call(obj, 'Molly', 21);


//default binding
function fun1(name, age) {
  console.log(name);
  console.log(age);
  console.log(this);
}
fun1('Molly', 21);

// binding this to a specific object
const obj1 = {
  name: 'Molly',
  age: 21
};
fun1.apply(obj1, ['Molly', 21]);