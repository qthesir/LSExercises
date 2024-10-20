// Building on your solutions from the previous exercises, write a function localGreet
// that takes a locale as input, and returns a greeting. The locale allows us to greet
// people from different countries differently also when they share the language.

// Distinguish greetings for English speaking countries like the US, UK, Canada,
// or Australia in your implementation, and feel free to fall back on the
// language-specific greetings in all other cases.

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

function extractLanguage(locale) {
  // return locale.slice(0, 2);
  return locale.split("_")[0];
}

const extractRegion = (locale) => {
  // return locale.slice(3, 5);
  // let index1 = locale.indexOf("_");
  // let index2 = locale.indexOf(".");
  // return locale.substring(index1 + 1, index2);
  return locale.split("_")[1].split(".")[0];
};

const localGreet = (locale) => {
  let language = extractLanguage(locale);
  if (language === "en") {
    let region = extractRegion(locale);
    switch (region) {
      case "US":
        return "Hey!";
      case "GB":
        return "Hello!";
      case "AU":
        return "Howdy!";
    }
  } else {
    return greet(language);
  }
};

console.log(localGreet("en_US.UTF-8")); // 'Hey!'
console.log(localGreet("en_GB.UTF-8")); // 'Hello!'
console.log(localGreet("en_AU.UTF-8")); // 'Howdy!'

console.log(localGreet("fr_FR.UTF-8")); // 'Salut!'
console.log(localGreet("fr_CA.UTF-8")); // 'Salut!'
console.log(localGreet("fr_MA.UTF-8")); // 'Salut!'

// I should always be thinking... How can I make this code easier to read? Because
// the above that I wrote is ugly, vs. the solution, which is much more elegant and 
// easier to read. Has some special cases with region and then a default case that
// just uses the greet function. This is, perhaps, why switch statements are useful: 
// they are easier to read in some circumstances. For maximum readibility, however,
// I would deal with the greet logic entirely in the greet function. 
