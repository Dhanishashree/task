// Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Assignment Operators
let x = 5;
x += 3;
console.log("x after += :", x);
x -= 2;
console.log("x after -= :", x);

// Relational Operators
console.log("a > b =", a > b);
console.log("a < b =", a < b);
console.log("a == 10 =", a == 10);
console.log("a === '10' =", a === "10");
console.log("a != b =", a != b);

// Logical Operators
console.log("(a > 5 && b < 5) =", a > 5 && b < 5);
console.log("(a < 5 || b < 5) =", a < 5 || b < 5);
console.log("!(a == 10) =", !(a == 10));

// Conditional (Ternary) Operator
let result = (a > b) ? "A is greater" : "B is greater";
console.log("Result:", result);

// Bitwise Operators
console.log("Bitwise AND:", a & b);
console.log("Bitwise OR:", a | b);
console.log("Bitwise XOR:", a ^ b);
console.log("Bitwise NOT (~a):", ~a);
console.log("Left Shift:", a << 1);
console.log("Right Shift:", a >> 1);

// Increment & Decrement
let count = 5;
console.log("Original count:", count);
console.log("Pre-increment:", ++count);
console.log("Post-increment:", count++);
console.log("After post-increment:", count);
console.log("Pre-decrement:", --count);
console.log("Post-decrement:", count--);
console.log("After post-decrement:", count);