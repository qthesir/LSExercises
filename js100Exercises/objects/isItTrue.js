// We are experimenting with some code to get more comfortable working with objects. Run
// the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  "property name": "string value",
  true: false,
  fun: function () {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  console.log(prop);
  if (prop === true) {
    console.log("It's true!");
  }
}

// This is because prop, although iterating through the properties of an object, one of
// which includes 'true', is evaluating to a string type, and 'true' does not equal the bool 
// true.
