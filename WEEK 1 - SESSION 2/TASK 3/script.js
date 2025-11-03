console.log("Using break: Stop at the first prime number between 10 and 20");

for (let num = 10; num <= 20; num++) {
  let isPrime = true;

  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`First prime number found: ${num}`);
    break; 
  }
}


console.log("Using continue: Print only odd numbers between 1 and 20");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i);
}


console.log("Demonstrating break and continue in the same loop:");

for (let n = 1; n <= 10; n++) {
  if (n === 5) {
    console.log("Skipping number 5 (continue)");
    continue;
  }
  if (n === 8) {
    console.log("Breaking at number 8 (break)");
    break;
  }
  console.log("Current number:", n);
}