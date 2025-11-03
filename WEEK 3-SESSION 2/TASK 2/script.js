console.clear();
console.log("=== TASK 2: COMPLEX DATA & PARAMETER HANDLING ===");


const users = [
  {
    id: 1,
    name: "Kavi",
    age: 21,
    address: { city: "Chennai", pin: 600001 }
  },
  {
    id: 2,
    name: "Ravi",
    age: 23,
    address: { city: "Madurai", pin: 625001 }
  },
  {
    id: 3,
    name: "Asha",
    age: 22,
    address: { city: "Coimbatore", pin: 641001 }
  }
];

console.log("\n--- Array of Objects ---");
users.forEach(user => {
  console.log(`Name: ${user.name}, City: ${user.address.city}, PIN: ${user.address.pin}`);
});

console.log("\nAccessing Nested Data:");
console.log("First user's city:", users[0].address.city);

function calculateTotal(...numbers) {
  let total = 0;
  for (let n of numbers) total += n;
  return total;
}

console.log("\n--- Rest Parameters ---");
console.log("Sum of 3 numbers:", calculateTotal(10, 20, 30));
console.log("Sum of 5 numbers:", calculateTotal(1, 2, 3, 4, 5));


const fruits = ["Apple", "Banana"];
const vegetables = ["Carrot", "Tomato"];
const combined = [...fruits, ...vegetables];

console.log("\n--- Spread Operator (Combine Arrays) ---");
console.log("Combined Array:", combined);


const originalUser = { name: "Kavi", age: 21 };
const clonedUser = { ...originalUser };
clonedUser.name = "Ravi"; 

console.log("\n--- Spread Operator (Clone Object) ---");
console.log("Original User:", originalUser);
console.log("Cloned User (modified):", clonedUser);


function displayUser({ name, age, address: { city, pin } }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}, PIN: ${pin}`);
}

console.log("\n--- Parameter Destructuring ---");
displayUser(users[0]);
displayUser(users[1]);


function printTopTwo([first, second]) {
  console.log(`Top 1: ${first.name}, Top 2: ${second.name}`);
}

console.log("\n--- Array Destructuring in Function ---");
printTopTwo(users);


const newUsers = [
  { id: 4, name: "Priya", age: 24, address: { city: "Trichy", pin: 620001 } }
];

const allUsers = [...users, ...newUsers];
console.log("\n--- Combined User List ---");
allUsers.forEach(({ name, address: { city } }) => {
  console.log(`${name} lives in ${city}`);
});