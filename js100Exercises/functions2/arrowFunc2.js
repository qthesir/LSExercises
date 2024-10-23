// The function initGame below returns an object. Refactor it using arrow function syntax:

const initGame = () => {
  return {
    level: 1,
    score: 0,
  };
};

let game = initGame();

console.log("Level: " + game.level);
console.log("Score: " + game.score);

// If you were to attempt to write the function like this:

const initGame2 = () => ({ level: 1, score: 0 });

//... it is essential that you include parenthesis before the curly braces. If you put curly
// braces without parenthesis, then JavaScript thinks you're creating a block scope for the
// function, rather than trying to return an object.
