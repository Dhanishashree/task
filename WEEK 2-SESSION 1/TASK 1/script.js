// --- Function with fixed parameters ---
function addNumbers(a, b) {
  return a + b;
}

function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript functions.`;
}

// --- Function with arbitrary number of arguments (Rest Operator) ---
function multiplyAll(...numbers) {
  let product = 1;
  for (let num of numbers) {
    product *= num;
  }
  return product;
}

// --- Function using arguments object ---
function showArguments() {
  console.log("Arguments passed:", arguments);
  return `Total arguments: ${arguments.length}`;
}

// --- Calling and testing the functions ---
console.log("=== Function with Fixed Parameters ===");
console.log("Sum of 5 + 10 =", addNumbers(5, 10));
console.log(greetUser("Kavi"));

console.log("\n=== Function with Rest Operator ===");
console.log("Product of 2, 3, 4 =", multiplyAll(2, 3, 4));
console.log("Product of 5, 10, 2, 3 =", multiplyAll(5, 10, 2, 3));

console.log("\n=== Function using arguments object ===");
console.log(showArguments(1, "apple", true, 42));