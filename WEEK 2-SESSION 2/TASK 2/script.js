

console.log("=== ARRAY CREATION ===");


let numbers = [10, 20, 30, 40, 50];
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);

console.log("\n=== ACCESS & MODIFY ELEMENTS ===");


console.log("First number:", numbers[0]);
console.log("Second fruit:", fruits[1]);

numbers[2] = 35;
fruits[3] = "Pineapple";
console.log("Modified numbers:", numbers);
console.log("Modified fruits:", fruits);

console.log("\n=== ARRAY LENGTH ===");
console.log("Numbers array length:", numbers.length);
console.log("Fruits array length:", fruits.length);

console.log("\n=== ADDING & REMOVING ELEMENTS ===");
-
numbers.push(60);
fruits.push("Grapes");
console.log("After push - numbers:", numbers);
console.log("After push - fruits:", fruits);


numbers.pop();
fruits.pop();
console.log("After pop - numbers:", numbers);
console.log("After pop - fruits:", fruits);


numbers.unshift(5);
fruits.unshift("Strawberry");
console.log("After unshift - numbers:", numbers);
console.log("After unshift - fruits:", fruits);

numbers.shift();
fruits.shift();
console.log("After shift - numbers:", numbers);
console.log("After shift - fruits:", fruits);

console.log("\n=== FINAL ARRAYS ===");
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);