// Write a function that takes an ISO 639-1 language code and returns a greeting in that
// language. You can take the examples below or add whatever languages you like.

function greet(country) {
  switch (country) {
    case "en":
      return "Hi!";
    case "fr":
      return "Salut!";
    case "pt":
      return "Ola!";
    case "de":
      return "Hallo!";
    case "sv":
      return "Hej!";
    case "af":
      return "Haai!";
  }
}

console.log(greet("en")); // 'Hi!'
console.log(greet("fr")); // 'Salut!'
console.log(greet("pt")); // 'Olá!'
greet("de"); // 'Hallo!'
greet("sv"); // 'Hej!'
greet("af"); // 'Haai!'

// If you return a value with the switch statement, there is no need for the break. Only 
// if you are logging or not returning anything specifically.
