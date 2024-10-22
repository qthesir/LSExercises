// What will be logged?

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// Whats going to be logged is 1 and 2. The first console.log(a) will log the a declared
// in the outer scope. Then, the second a is declared in the inner scope, and this a will
// shadow the variable in the outer scope. The second console will log 2.

// Oh, wow. Interesting. So it would appear that a ReferenceError was thrown.
// Maybe the variable declaration subsumes the entire scope? 

// Ok, so, here's the explaination from LS: Technically, the scope of a, where a is 
// declared, consists of the entire block. Let is technically hoisted, but it creates
// what's called a temporal dead zone, which the variable exists but doesn't have value.
// Not even a value of undefined. That dead zone lasts until the variable is 
// declared in code. 
