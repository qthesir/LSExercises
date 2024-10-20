// Take your code from the previous Check the Weather exercise and rewrite it as a
// switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.

weather = "dumping";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  case "snowing":
    console.log("You'll need a winter coat.");
    break;
  case "dumping":
    console.log("It's about to be a sick day bud!");
    break;
  default:
    console.log("Let's stay inside.");
    break;
}

// So easy to forget that break statement because swithc is  different from every other
// statement structure
