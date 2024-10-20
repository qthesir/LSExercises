// Initialize a variable weather with a string value being "sunny", "rainy",
// or anything else.

// Write an if statement that logs:

// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.
// Test your code with different values for weather.

let weather = "cloudy";

if (weather === "sunny") {
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
    break;
}

// There's another if/else statement that involves dropping down to different levels
// as conditions evaluate to true/false. This would be a good use case for it. Trying
// to remember what it is. Involves cases in the syntax. The switch statement.
