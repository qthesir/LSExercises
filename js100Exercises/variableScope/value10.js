// What is logged to the console?

const a = {
  firstName: "John",
  lastName: "Doe",
};

function myFunction() {
  a.firstName = "Jane";
}

myFunction();

console.log(a);

// In this case, the object a will be logged to the console, with firstName holding the
// value 'Jane' instead of 'John.' This is because, while const variables cannot be
// reassigned, they can be mutated, and the operation performed inside myFunction mutates
// the firstName property in a. You can freeze an object if you want to make it immutable
// with Object.freeze().
