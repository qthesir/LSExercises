let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// This is definitely confusing. But I think, in this case, the argument b is passed in as
// a in the block scope of myFunction and will log 2. The variable b is effectively
// declared as a, and a is therefore shadowing the a in the global scope. That's my
// guess, although it would be useful to understand the specifics of whats happening
// with the argument in the function.
