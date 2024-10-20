// Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(" ");
let isValid = tweet.length < 140;

// What will the following statements return?

typeof tweet; // string
typeof words; // object
typeof isValid; // boolean

// Have to remember: Arrays are not a type. They are type object. Screwed this up again.
// The way you distinguish whether or not something is an array is using Array.isArray().
