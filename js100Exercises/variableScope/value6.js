// What will the following code log?

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// b is going to log false here. The b variable declared in the if block scope is
// shadowing the b in the global scope, and any operations/reassignments performed on b
// will not affect the global b. If the desired behavior is to reassign b to false in the
// if block, then one would simply need to remove the let statement.
