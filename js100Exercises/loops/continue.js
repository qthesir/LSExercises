// write a for loop that loops over the elements of the array cities and logs the
// length of each string to the console. If the element is null, skip forward to the
// next iteration without logging anything to the console.

let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

function strLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue;
    }

    console.log(arr[i].length);
  }
}

strLength(cities);

// With nested loops, you may need to include a label in order to explicitly which loop the
// continue statement jumps to the top of.
