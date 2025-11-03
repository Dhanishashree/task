function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); 
}

function showMessage() {
  console.log("Welcome to the JavaScript session!");
}

greetUser("Dhanisha", showMessage);


function fetchData(callback) {
  console.log("Fetching data...");

  
  setTimeout(() => {
    console.log("Data fetched successfully!");
    callback();
  }, 1000);
}

function displayData() {
  console.log("Now displaying data to user.");
}

fetchData(displayData);


console.log("\n--- Scope Demonstration ---");


var globalVar = "I'm a global variable";

function scopeTest() {
  
  var localVar = "I'm a local variable";
  let blockScopedLet = "I'm block-scoped (inside function)";
  const constScopedConst = "I'm also block-scoped (inside function)";

  console.log(globalVar); 
  console.log(localVar); 
  console.log(blockScopedLet);
  console.log(constScopedConst);

  if (true) {
    var functionVar = "Declared with var inside block";
    let blockVar = "Declared with let inside block";
    const constVar = "Declared with const inside block";

    console.log("\nInside block:");
    console.log(functionVar); 
    console.log(blockVar);
  }
}