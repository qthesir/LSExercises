// Given the following tweet:

let tweet = "Starting to get the hang of it... #javascript #launchschool";

// What will the following statements evaluate to?

tweet.split(" "); // ['Starting', 'to', 'get', 'the', 'hang', 'of', 'it...', '#javascript', '#launchschool']
tweet.split(" ").reverse(); // Same as above but in reverse order.
tweet.split(" ").reverse().join(" "); // This will return the original tweet string, but backwards.

console.log(tweet.split(" ").reverse().join(" "));
