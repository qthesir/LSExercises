// How can we alter the function definition of greet so that the parameter greeting is
// assigned a default value of 'Hello' when no argument is passed to the function invocation?

function greet(greeting = "Hello") {
  console.log(greeting + ", world!");
}

greet("Salutations");
greet();
greet(undefined);

// I suppose undefined is the placeholder javascript uses if there is no variable passed into
// the function where a variable is expected, which is why the funciton exhibits the same
// behavior when you pass in undefined. 
