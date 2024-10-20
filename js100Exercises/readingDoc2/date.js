// Find out what Date.now() returns

console.log(Date.now());

// Guessing that this returns todays date.
// Wrong. It returned some large number. Which, if parsed, could represent the date.
// Upon checking the doc, its the number of milliseconds that have elapsed since the
// epoch, which is defined as the midnight at the beginning of Jan 1, 1970, UTC. 
