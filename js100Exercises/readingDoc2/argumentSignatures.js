// How many arguments does the Array.prototype.join() method expect? What happens if
// you call it with less or more arguments?

arr1 = [1, 2, 3];
console.log(arr1.join(" "));

// It requires an optional separator parameter, which indicates what element will separate
// each of the items in the array. It does not require an argument. The default behavior
// with no argument is to separate each of the array elements with a comma. Any excess
// arguments passed in are ignored.
