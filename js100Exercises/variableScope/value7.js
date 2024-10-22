// What will the following code log to the console and why?

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// The console will log 1. This is because variables declared in the outer scope are
// accessible by the inner scope, unless another variable of the same name is declared and
// shadows the variable in the outer scope.
