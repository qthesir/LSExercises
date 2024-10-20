//  Run the following code:

let tweet = "Woohoo! :-)";

if (tweet.length() > 140) {
  console.log("Tweet is too long!");
}

// You'll see that it raises an error - TypeError: tweet.length is not a function
// Check the documentation of both TypeError and length in order to find out what's causing
// the error.

// The reason the error is being thrown is becaue tweet.length is a property of a string,
// not a method, so it isn't invoceable. tweet.length is a property, which is accessed/
// retrieved/read without parenthesis.

// The doc states that the exception occurs when there is an attempt to call a value from
// a function, but the value is not a function.
