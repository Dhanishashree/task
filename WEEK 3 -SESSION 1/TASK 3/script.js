console.clear();
console.log("=== Task 3: Object Destructuring and Spread ===");


const student = {
  name: "Kavi",
  age: 21,
  course: "Computer Science",
  city: "Chennai"
};

const { name, age, course } = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);


const { country = "India", city } = student;
console.log("City:", city);
console.log("Country (default):", country);


const employee = {
  empName: "Ravi",
  details: {
    position: "Developer",
    salary: 60000,
    address: {
      city: "Coimbatore",
      state: "Tamil Nadu"
    }
  }
};

const {
  empName,
  details: {
    position,
    salary,
    address: { city: empCity, state }
  }
} = employee;

console.log("\nNested Object Destructuring:");
console.log(`Name: ${empName}`);
console.log(`Position: ${position}`);
console.log(`Salary: ${salary}`);
console.log(`City: ${empCity}`);
console.log(`State: ${state}`);


const original = { a: 1, b: 2, c: 3 };
const clone = { ...original };

console.log("\nSpread Operator - Clone Example:");
console.log("Original:", original);
console.log("Clone:", clone);


clone.b = 200;
console.log("After modifying clone.b:");
console.log("Original:", original);
console.log("Clone:", clone);


const obj1 = { name: "Priya", age: 25 };
const obj2 = { department: "HR", salary: 40000 };

const merged = { ...obj1, ...obj2 };
console.log("\nSpread Operator - Merge Example:");
console.log("Merged Object:", merged);


function displayEmployee({ name, department = "General", salary = 0 }) {
  console.log(`Employee: ${name}, Department: ${department}, Salary: ₹${salary}`);
}

console.log("\nDestructuring in Function Parameters:");
displayEmployee({ name: "Asha", department: "Design", salary: 50000 });
displayEmployee({ name: "Vijay" }); 

console.log("\n✅ Task 3 completed successfully!");