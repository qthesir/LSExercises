// What will the following code log to the console?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// Going to log 1 to the console. Variables declared in outer scope are accessible by
// the inner scope of the if statement. In other words, the a declared in myFunction
// is accessible to the if statement within that function.
