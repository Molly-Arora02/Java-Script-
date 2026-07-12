const obj = {
  name: "John",
  age: 30,
  sayName: function() {
    console.log(this.name);
  },
  favColor :{
    color : 'blue',
    sayColor : function() {
      console.log(this.color);
    }
  }
}