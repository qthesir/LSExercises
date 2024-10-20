// The MDN page for Date lists two methods to get the year of a date:

let today = new Date();

console.log(today.getYear());
console.log(today.getFullYear());

// What is the difference between the two methods and which one should you use?

// Well, getYear() is depreceated because it does not return full years - presumably
// only the last 2 or 3 digits of a year. This does not allow one to differentiate if
// the year is 2000 or above. getFullYear returns the full year, accounting for the
// new millenium.
// After returning the values, it doesn't even return the last 3 digits. It returns 124.
// That is strange. I guess the reason is it subtracts 1900. But what would happen if
// you want to analyze dates in the past? 