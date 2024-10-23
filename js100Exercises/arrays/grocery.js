// We have made a grocery list, and as we check off items on that list, we would like to
// remove them.

// Write code that removes the items from 'groceryList' one by one, until it is empty.
// If you log the elements you remove, the expected behavior would look as follows.

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

// Your code.

function groceryShop(groceries) {
  let iters = groceries.length; 
  // Because we are shortening the length each iteration, it's necessary that we preserve 
  // the initial length in order to remove all items from the list
  for (let i = 0; i < iters; i++) {
    console.log(groceries.shift());
  }
}

function groceryShop2(groceries) {
  while (groceries.length > 0) {
    console.log(groceries.shift())
  }
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryShop1(groceryList);
console.log(groceryList); // []

// This could have been a better application for a while loop, per the solution. I definitely 
// have a tendency to lean towards for loops. That being said, I could have just set the 
// condition in the for loop for groceryList.length > 0, and it would have been the same as
// a while loop. Damn, its so easy to get stuck in certain types of problems, its good
// that LS mixes it up periodically. While loop is also more elegant, because no need 
// for an index value, you are using the list length as the iterator. 
