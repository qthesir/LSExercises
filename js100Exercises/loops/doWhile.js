// What is the difference between the following two code snippets? Check the
// MDN documentation on while and do...while.

let counter1 = 0;

while (counter1 > 0) {
  console.log("Woooot!");
  counter1 -= 1;
}

let counter = 0;

do {
  console.log("Woooot!");
  counter -= 1;
} while (counter > 0);

// The difference between the two statements is that, in a do loop, the code block runs before
// the conditional is checked. This can be useful in certain scenarios, where you need to,
// say, initialize a variable. So, a do... while statement will be executed at least once,
// even if the condition is not satisfied.
