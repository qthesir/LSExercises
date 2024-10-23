// How can you check whether a variable holds a value that is an array? For example,
// imagine you start writing a function and want to check whether its argument is an array:

arr = [1, 2, 3];
notArr = "Hi!";

function filter(input) {
  // Is input an array?
  return Array.isArray(input);
}

console.log(filter(arr));
console.log(filter(notArr));

// Its like... ok. How can I figure if something is an array? Well, I could try
// to copy it, then see if the two equal. But that wouldnt leave an option to see if
// its an array type object, and not just a regular object. I remember faintly a function
// that allows you to see if the object is an array type, but I can't remember it. How
// else could you tell if something is an array? Well... we could check if its iterable.
// This may be an imperfect solution, but I could check to see if each subsequent key
// is larger than the last.
