if (true) {
  let myValue = 20;
}

console.log(myValue);

// This is going to throw a ReferenceError. The if statement executes, but the myValue
// variable is declared in block scope of if. But... hmm. I can't quite remember if the
// if statement defines a block scope. If I'm thinking about it, that would kind of be
// a nuisance or unexpected if the if statement bracket created an inner scope. I've
// changed my mind. I'm going to guess that the console.log() invocation logs 20.

// I was wrong, again. Well, right originally. The if statement creates a block scope.
// General rule: With the exception of object literals, all curly braces indicate a scope.
// For loops, while, if, and even plain code blocks. 
