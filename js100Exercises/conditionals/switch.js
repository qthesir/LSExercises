// Take a look at the code below. Without running it, determine what it will log to the
// console. If you're not sure, refer to the MDN documentation on switch statements.

let animal = "horse";

switch (animal) {
  case "duck":
    console.log("quack");
  case "squirrel":
    console.log("nook nook");
  case "horse":
    console.log("neigh");
  case "bird":
    console.log("tweet tweet");
  default:
    console.log("*cricket*");
}

// The case 'horse' will evaluate the expression as true and execute the subsequent
// code block, but given the above code is completely missing break statements, the function
// will "fall through" all the way through to the default case, so 'bird' and the
// default case statements will both run as well.
