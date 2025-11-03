console.log("Numbers from 1 to 10 using while loop:");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}


let attempt = 0;
let correct = false;
do {
  console.log("Attempt:", attempt + 1);
  attempt++;
  if (attempt === 3) {
    correct = true;
    console.log("Correct input received after 3 attempts!");
  }
} while (!correct);


let N = 10;
let sum = 0;

for (let j = 1; j <= N; j++) {
  sum += j;
}
console.log(`Sum of first ${N} natural numbers is: ${sum}`);


console.log("Multiplication Table (1 to 5):");

for (let x = 1; x <= 5; x++) {
  let row = "";
  for (let y = 1; y <= 5; y++) {
    row += (x * y).toString().padStart(4, " ");
  }
  console.log(row);
}