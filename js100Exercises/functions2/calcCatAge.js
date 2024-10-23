// Implement a function catAge that takes a number of human years as input and converts
// them into cat years. Cat years are calculated as follows:

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

function calcCatAge(humanAge) {
  let catAge = 0;
  switch (true) {
    case humanAge > 2:
      catAge = catAge + (humanAge - 2) * 4;
    case humanAge > 1:
      catAge = catAge + 9;
    case humanAge > 0:
      catAge = catAge + 15;
  }
  return catAge;
}

function calcCatAge2(humanAge) {
  let catAge = 0;
  switch (humanAge) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanAge - 2) * 4;
  }
}

console.log(calcCatAge2(0)); // 0
console.log(calcCatAge2(1)); // 15
console.log(calcCatAge2(2)); // 24
console.log(calcCatAge2(3)); // 28
console.log(calcCatAge2(4)); // 32

// Something that is drilled more into me after this exercise: Switch statements don't look for
// return values of true versus false. Under the hood, they are looking for a match to the
// value passed into the statement. I.e., each case is performing
// (parameter) parameter === case value.
// I suppose the interesting thing about my solution is that it uses the fall-through 
// functionality. Every case executes with mine. 
