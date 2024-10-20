// The code provided below will randomly initialize randomNumber to either 0 or 1 each
// time it is executed.

// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if
// randomNumber is 0.

let randomNumber = Math.round(Math.random());

if (randomNumber === 1) {
  console.log("Yes!");
} else {
  console.log("No.");
}

// Could have also just used (randomnumber) in the if statement, since 0 is a falsey value
// and 1 is truthy. 