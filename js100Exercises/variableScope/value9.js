// What does the following code log?

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// In this case, myFunction is going to log undefined, because no value was returned, and
// no value will log to the console, because there are no console.log statements.
// Oh wait. Thats not the case. What's actually going to happen, is a TypeError is going to
// be logged to the console, because a is a constant, and the function is attempting to
// reassign a. The a passed into myFunction(a) will actually be ignored, because thats
// how JavaScript handles excess arguments passed where no parameter has been defined.
