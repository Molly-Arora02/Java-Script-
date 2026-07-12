function sum(x,y,z){
  return x+y+z;
}
console.log(sum(1,2,6));

function sum(x,y,z){
  return x+y+z;
}
console.log(sum(1,2));

function sum(x,y,z=4){
  return x+y+z;
}
console.log(sum(1,2)); // default arguments 

function sum(x,y,z=4){
  return x+y+z;
}
console.log(sum(1,2,6));

function sum(x=1,y,z){ // can not give default argument in beginning 
  return x+y+z;
}
console.log(sum(1,2));
