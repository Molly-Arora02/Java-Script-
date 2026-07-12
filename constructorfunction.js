function Person (name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function() {
    console.log(this.name); 

  const p1 = new Person("John", 30);
  p1.sayName(); // Output: John
  console.log(p1.age); // Output: 30
  const p2 = new Person("Jane", 25);
  p2.sayName(); // Output: Jane
  console.log(p2.age); // Output: 25
  }
  }; 