// The code raises a SyntaxError: SyntaxError, Unexpected Token &&

// Find and read the documentation about this error on MDN. Then, fix the code.

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && currentSpeed - speedLimit > 5) {
  console.log(
    '"People are so bad at driving cars ' +
      "that computers don't have to be that good to be much better.\" " +
      "-- Marc Andreessen"
  );
}

// SyntaxError is because the if statement requires parenthesis wrapped around its
// conditional expression, and is thus considering currentSpeed > speedLimit as its only
// conditional. It expects to have a code block after it, but instead it gets &&, thus the
// syntax error.

// The documentation exlicit states that an "unexpected token" error occurs when the parser
// does not see a token it recognizes at a given position.

// A token, in the context of programming and in languages, refers to the smallest unit of
// meaningful syntax.
