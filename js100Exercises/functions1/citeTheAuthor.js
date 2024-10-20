// Let's generalize the function from the previous exercise a bit. Implement a function
// cite that takes two string arguments: the author of the quote and what they said.
// It then logs the quote to the console, as in the following example.

let authorName = "Brendan Eich";
let quoteVal = "Always bet on JavaScript";

function cite(author, quote) {
  console.log(`${author} said: ${quote}`);
}
cite(authorName, quoteVal);
