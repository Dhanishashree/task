

console.log("=== WORKING WITH OBJECTS AND METHODS ===");

let student = {
  name: "Dhanisha",
  age: 20,
  course: "Computer Science",


  displayInfo: function() {
    console.log(`Student Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Course: ${this.course}`);
  },

  updateCourse: function(newCourse) {
    this.course = newCourse;
    console.log(`Course updated to: ${this.course}`);
  }
};


console.log("\n--- Accessing Object Properties ---");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);

console.log("\n--- Calling Object Method ---");
student.displayInfo();


console.log("\n--- Modifying Properties ---");
student.age = 21;
student.updateCourse("Information Technology");
student.displayInfo();


console.log("\n--- Adding New Properties ---");
student.grade = "A";
console.log("Added property 'grade':", student.grade);
console.log("Updated student object:", student);


console.log("\n--- Removing a Property ---");
delete student.grade;
console.log("After deleting 'grade':", student);


let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2022,
  start: function() {
    console.log(`${this.brand} ${this.model} engine started.`);
  },
  stop: function() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
};

console.log("\n=== Car Object Example ===");
car.start();
car.stop();


console.log("Original Year:", car.year);
car.year = 2024;
console.log("Updated Year:", car.year);


car.color = "White";
console.log("Car color added:", car.color);

console.log("\nFinal Car Object:", car);