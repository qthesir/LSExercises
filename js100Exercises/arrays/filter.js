// Count the number of elements in scores taht are 100 or above

let scores = [96, 47, 113, 89, 100, 102];

function above100(arr) {
  count = 0;
  for (let i of arr) {
    if (i >= 100) {
      count += 1;
    }
  }
  return count;
}

// Alternatively...

array100 = scores.filter((score) => score >= 100);

console.log(above100(scores));
console.log(array100.length);
