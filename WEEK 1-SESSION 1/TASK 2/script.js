let num = 25; 
let str = "Hello"; 
let isStudent = true; 
let value = null; 
let notDefined; 
let person = { name: "Arun", age: 21 }; 
let symbol = Symbol("id"); 

console.log(typeof num);
console.log(typeof str);
console.log(typeof isStudent);
console.log(typeof value);
console.log(typeof notDefined);
console.log(typeof person);
console.log(typeof symbol);


let numStr = "123";
let convertedNum = Number(numStr);
console.log("Converted Number:", convertedNum, typeof convertedNum);

let number = 456;
let convertedStr = String(number);
console.log("Converted String:", convertedStr, typeof convertedStr);


console.log("'5' + 2 =", "5" + 2);
console.log("'5' - 2 =", "5" - 2);
console.log("'10' * '2' =", "10" * "2");