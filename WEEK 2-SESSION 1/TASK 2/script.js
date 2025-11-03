function greet(name) {
  return `Hello, ${name}!`;
}
console.log("Function Declaration:", greet("Kavi"));


const greetExpression = function(name) {
  return `Hi, ${name}! (from function expression)`;
};
console.log("Function Expression:", greetExpression("Kavi"));


const greetArrow = (name) => `Hey, ${name}! (from arrow function)`;
console.log("Arrow Function:", greetArrow("Kavi"));


const add = (a, b) => a + b;
console.log("Sum using arrow function:", add(5, 10));


const sayHello = () => console.log("Hello from arrow function!");
sayHello();


const createUser = (name, age) => ({ name, age });
console.log("Arrow function returning object:", createUser("Kavi", 20));


console.log("Observing 'this' behavior:");
const user = {
  name: "Kavi",
  normalFunction: function() {
    console.log("normalFunction this.name =", this.name);
  },
  arrowFunction: () => {
    
    console.log("arrowFunction this.name =", this.name);
  }
};

user.normalFunction();
user.arrowFunction();  


const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log("Squares using arrow function and map():", squares);