// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: "Tesla",
  model: "Model X",
  year: 2015,
  range: 295,
  seats: 7,
};

let keys = Object.keys(vehicle);

function getKeys(obj) {
  let keys2 = [];
  for (let prop in obj) {
    keys2.push(prop);
  }
  return keys2;
}

console.log(keys);
console.log(getKeys(vehicle));
