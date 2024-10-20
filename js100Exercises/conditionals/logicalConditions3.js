// Without running the below code, determine what will be logged to the console;

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log("$" + admissionPrice);

// admissionPrice will evaluate to 3.99, since the ! (inverse) operator is acting on the
// true (held by the sale varialble) which causes the terniary operator to return the second
// literal expression. Thus, console.log will return $3.99.
