// Add a property to the below object, jane, so that the code on line 13 logs 'Hey, Bobby!'
// to the console.

let jane = {
  firstName: "Jane",
  lastName: "Harrelson",
  age: 32,
  location: {
    country: "Denmark",
    city: "Aarhus",
  },
  occupation: "engineer",
  greet: (names) => console.log(`Hey, ${names}!`),
};

jane.greet("Bobby"); // Hey, Bobby!
