console.clear();
console.log("=== TASK 3: FUNCTION CONTEXT & ADVANCED CALLS ===");


const person1 = {
  name: "Kavi",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person2 = { name: "Ravi" };

console.log("\n--- Normal Function Call ---");
person1.greet(); 

console.log("\n--- Using call() ---");

person1.greet.call(person2); 


function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

console.log("\n--- call() with parameters ---");
introduce.call(person1, "Chennai", "India");
introduce.call(person2, "Madurai", "India");

-
console.log("\n--- Using apply() ---");

introduce.apply(person1, ["Coimbatore", "India"]);
introduce.apply(person2, ["Trichy", "India"]);


console.log("\n--- Using bind() ---");


const greetKavi = introduce.bind(person1, "Salem", "India");
const greetRavi = introduce.bind(person2, "Madurai", "India");


greetKavi();
greetRavi();

console.log("\n--- Comparison Summary ---");

function showDetails(subject1, subject2) {
  console.log(`${this.name} teaches ${subject1} and ${subject2}`);
}

const teacher = { name: "Asha" };
console.log("\nUsing call():");
showDetails.call(teacher, "Maths", "Science");

console.log("Using apply():");
showDetails.apply(teacher, ["English", "History"]);

console.log("Using bind():");
const boundFn = showDetails.bind(teacher, "Physics", "Chemistry");
boundFn();


console.log("\n--- Bonus: bind() for delayed calls ---");

const student = {
  name: "Priya",
  introduceLater: function () {
    setTimeout(function () {
      console.log(`Hi, I'm ${this.name} (wrong context)`); 
    }, 500);

    setTimeout(function () {
      console.log(`Hi, I'm ${this.name} (correct context)`); 
    }.bind(this), 1000);
  }
};

student.introduceLater();