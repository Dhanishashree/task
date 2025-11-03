console.log("=== ADVANCED ARRAY METHODS ===");

let numbers = [5, 12, 8, 20, 15, 3];
let words = ["JavaScript", "is", "fun", "to", "learn"];

console.log("\nUsing filter() — numbers > 10:");
let filteredNumbers = numbers.filter(num => num > 10);
console.log("Original numbers:", numbers);
console.log("Filtered ( >10 ): ", filteredNumbers);


console.log("\nUsing reduce() — calculate sum:");
let sum = numbers.reduce((total, current) => total + current, 0);
console.log("Sum of numbers:", sum);

console.log("\nUsing reduce() — calculate product:");
let product = numbers.reduce((total, current) => total * current, 1);
console.log("Product of numbers:", product);

console.log("\nUsing reduce() — concatenate strings:");
let sentence = words.reduce((acc, word) => acc + " " + word);
console.log("Concatenated string:", sentence.trim());


console.log("\nUsing slice():");
let slicedNumbers = numbers.slice(1, 4); 
console.log("Original numbers:", numbers);
console.log("Sliced portion (1–3):", slicedNumbers);


console.log("\nUsing splice():");
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Original fruits:", fruits);

fruits.splice(1, 1, "Grapes", "Pineapple");
console.log("After splice (remove + add):", fruits);


let removedFruits = fruits.splice(2, 2);
console.log("Removed fruits:", removedFruits);
console.log("Remaining fruits:", fruits);


console.log("\nUsing spread operator:");

let clonedNumbers = [...numbers];
console.log("Cloned numbers:", clonedNumbers);

let moreNumbers = [100, 200, 300];
let mergedNumbers = [...numbers, ...moreNumbers];
console.log("Merged arrays:", mergedNumbers);


console.log("Max number using spread:", Math.max(...numbers));


clonedNumbers.push(999);
console.log("Modified clone:", clonedNumbers);
console.log("Original numbers remain unchanged:",numbers);