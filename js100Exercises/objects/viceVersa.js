// Write code that does the reverse, starting from a nested array of pairs and building an
// object.

let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// solution 1 
const buildObj = (array) => {
  newObj = {};
  for (let pair of array) {
    newObj[pair[0]] = pair[1];
  }
  return newObj;
};

// solution 2
obj = {};
for (let i = 0; i < nestedArray.length; i++) {
  subarr = nestedArray[i];
  obj[subarr[0]] = subarr[1];
}

// solution 3
let person = Object.fromEntries(nestedArray);
console.log(person);

console.log(buildObj(nestedArray));
console.log(obj);
