console.clear();
console.log("=== TASK 1: Destructuring, Notation & Iteration ===");


const fruits = ["Apple", "Banana", "Cherry", "Mango"];

console.log("\n--- Array Destructuring ---");
const [first, second, , fourth] = fruits;
console.log("First:", first);
console.log("Second:", second);
console.log("Fourth:", fourth);

const [a = "Default", b = "Default", c = "Default", d = "Default", e = "Papaya"] = fruits;
console.log("With Default:", a, b, c, d, e);


const numbers = [1, [2, 3], 4];
const [one, [two, three], four] = numbers;
console.log("Nested Destructure:", one, two, three, four);
// 2️⃣ OBJECT DESTRUCTURING
// ----------------------------
console.log("\n--- Object Destructuring ---");
const student = {
  name: "Kavi",
  age: 20,
  course: "Computer Science",
  address: {
    cityName: "Chennai",
    pin: 600001
  }
};

const { name, age, address: { cityName, pin } } = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", cityName);
console.log("PIN:", pin);


const { grade = "A+" } = student;
console.log("Grade (default):", grade);


console.log("\n--- Dot & Bracket Notation ---");
console.log("Using dot:", student.course);
console.log("Using bracket:", student["course"]);

const key = "name";
console.log("Dynamic key access:", student[key]);

student.age = 21;
student["course"] = "Information Technology";
console.log("Updated Student:", student);


console.log("\n--- Iterating through Object ---");

const car = {
  brand: "Toyota",
  model: "Innova",
  year: 2024
};

console.log("Using for...in:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

console.log("\nUsing Object.keys():");
Object.keys(car).forEach(key => {
  console.log(`${key}: ${car[key]}`);
});

console.log("\nUsing Object.values():");
Object.values(car).forEach(value => console.log(value));

console.log("\nUsing Object.entries():");
Object.entries(car).forEach(([key, value]) => {
  console.log(`${key} → ${value}`);
});


console.log("\n--- Combined Example ---");

const students = [
  { id: 1, name: "Ravi", marks: 85 },
  { id: 2, name: "Kavi", marks: 92 },
  { id: 3, name: "Asha", marks: 78 }
];

for (let { id, name, marks } of students) {
  console.log(`ID: ${id}, Name: ${name}, Marks: ${marks}`);
}