// Determine what the following code snippet logs. First solve it in your head or on paper,
// and only then run it in your JavaScript console to check the result.

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// I've added parenthesis to the statement to make it easier for myself to read:
// (brakingForce < acceleration) && ((speed > 0) || (acceleration > 0)).
// the left hand is 19 < 24, which is true, and the right hand is (false) or (true)
// making the whole statment true && true, therefore evaluating to true.

// Bonus question: Does the above require parenthesis?
// Answer: The expression still would have evaluated to true, so we would have gotten
// the same result, but it could have returned a different result under different
// conditions. This is because logical operators evaluate from left to right, and the
// brakingForce < acceleration && speed > 0 is evaluated first to false, then compared
// with the || operator acceleration > 0. So, depends on the goal, but if you wanted to
// have the same operation executed, the parenthesis are necessary. 
