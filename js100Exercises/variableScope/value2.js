// What will the following code log to the console and why?

console.log(greeting);

let greeting = 'Hello world!';

// I believe with the let keyword, the variable and its contents/assignment value are 
// hoisted. Don't remember why this is though. Well, wrong again. Fuck. It actually
// is not hoisted at all. let variables are not accessible before they are declared. 
// The design decision for this was because, predictably, var hoisting led to issues,
// because the declaration was hoisted by the program but not the value. Its better to
// just throw the error than to be caught off guard by undefined.