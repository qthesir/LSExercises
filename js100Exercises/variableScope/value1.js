// What will the following code log to the console and why? Don't run it until you have
// tried to answer.

console.log(greeting);

var greeting = "Hello world!";

// It's going ot log greeting because variables and functions are hoisted to the top of
// the program during compilation.

// The above is true - they are hoisted, but there is a nuance here. The variable is
// hoisted, but not the assignment, meaning that the variable is not assigned "hello world"
// until after the console.log invokation. Thus, the code logs undefined to the
// console.
