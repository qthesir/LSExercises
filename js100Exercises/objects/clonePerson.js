// Write a function clone that takes an object as argument and returns a shallow copy of
// that argument. A shallow copy returns a new object that is a copy of the original object.
// However, only the object itself and any properties with primitive values are duplicated.
// Properties that are themselves objects are copied "by reference" -- that is, only a
// pointer to the object is copied.

// solution 1
function clone(obj) {
  newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
    console.log(obj[key])
  }
  return newObj;
}

// solution2 
function clone2 (obj) {
  return Object.assign({}, obj)
}

let person = {
  title: "Duke",
  name: {
    value: "Nukem",
    isStageName: true,
  },
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false

// Bonus: DeepCopy function!

function deepClone(obj) {
  let deepCopy = {};

  Object.keys(obj).forEach( prop => {
    if (obj[prop] instanceof Date) {
      deepCopy[prop] = new Date(obj[prop]);
    } else if (typeof obj[prop] === 'object') { 
      deepCopy[prop] = deepClone(obj[prop]); // Here's the recursive call
    } else {
      deepCopy[prop] = obj[prop];
    }
  });

  return deepCopy;
}

// Love the recursive call - this is the perfect application of recursion. Calling 
// the object copy function on itself  