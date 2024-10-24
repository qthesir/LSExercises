// Convert the person object into a nested array nestedPerson, containing the same
// key-value pairs.

let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

function nestedArray(obj) {
  let arr = [];
  for (let key in obj) {
    let subArr = [key, obj[key]];
    arr.push(subArr);
  }
  return arr;
}

nestedPerson = Object.entries(person);

console.log(nestedArray(person));
console.log(nestedPerson);
