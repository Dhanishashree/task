

console.log("=== ARRAY ITERATION AND LOOPS ===");

let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];

console.log("\nUsing forEach() with numbers:");
numbers.forEach(function(num, index) {
  console.log(`Index ${index}: ${num}`);
});

console.log("\nUsing forEach() with fruits:");
fruits.forEach((fruit, i) => {
  console.log(`Fruit ${i + 1}: ${fruit}`);
});

console.log("\nUsing map() to square numbers:");
let squares = numbers.map(num => num * num);
console.log("Original numbers:", numbers);
console.log("Squared numbers:", squares);


console.log("\nUsing for-in loop (indexes of numbers):");
for (let index in numbers) {
  console.log(`Index: ${index}, Value: ${numbers[index]}`);
}


console.log("\nUsing for-of loop (values of numbers):");
for (let value of numbers) {
  console.log(`Value: ${value}`);
}

console.log("\nUsing for-of loop (fruits):");
for (let fruit of fruits) {
  console.log(fruit);
}


console.log("\n=== Comparison Summary ===");
console.log(`
forEach(): Executes a function for each element (cannot break early)
map(): Creates a new transformed array
for-in: Iterates over indexes (best for objects, but works with arrays)
for-of: Iterates directly over values (simple and clean)
`);

