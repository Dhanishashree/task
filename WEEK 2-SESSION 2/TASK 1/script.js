

console.log("=== MATH FUNCTIONS ===");


let randomNum = Math.random(); 
console.log("Random number (0–1):", randomNum);

let randomInRange = Math.floor(Math.random() * 100) + 1; 
console.log("Random number (1–100):", randomInRange);


let num = 7.56;
console.log("Original number:", num);
console.log("Math.round():", Math.round(num)); 
console.log("Math.floor():", Math.floor(num)); 
console.log("Math.ceil():", Math.ceil(num));   


let numbers = [12, 45, 2, 99, 56, 3];
console.log("Numbers:", numbers);
console.log("Minimum:", Math.min(...numbers));
console.log("Maximum:", Math.max(...numbers));


console.log("Math.abs(-25):", Math.abs(-25));
console.log("Math.pow(3, 4):", Math.pow(3, 4)); 
console.log("Math.sqrt(81):", Math.sqrt(81));

console.log("\n=== STRING FUNCTIONS ===");

let text = "JavaScript is Awesome!";

console.log("Original:", text);
console.log("To Uppercase:", text.toUpperCase());
console.log("To Lowercase:", text.toLowerCase());


console.log("Substring (0, 10):", text.substring(0, 10)); 
console.log("Slice (11):", text.slice(11)); 


console.log("Includes 'Awesome':", text.includes("Awesome"));
console.log("Includes 'Python':", text.includes("Python"));


let replacedText = text.replace("Awesome", "Powerful");
console.log("After replace:", replacedText);

