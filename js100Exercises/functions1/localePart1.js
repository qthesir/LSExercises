// Write a function that extracts the language code from a locale. A locale is a
// combination of a language code, a region, and usually also a character set,
// e.g en_US.UTF-8.

function extractLanguage(locale) {
  switch (locale) {
    case "en_US.UTF-8":
      return "en";
    case "en_GB.UTF-8":
      return "en";
    case "ko_KR.UTF-16":
      return "ko";
    default:
      return "invalid code";
  }
}

console.log(extractLanguage("en_US.UTF-8"));
console.log(extractLanguage("en_GB.UTF-8"));
console.log(extractLanguage("ko_KR.UTF-16"));

// Did this wrong... it wanted me to extract the language code from the local, not do it
// with conditionals. Much less code. Lets see:

function extractLanguage2(locale) {
  // return locale.slice(0, 2);
  return locale.split("_")[0];
}

console.log(extractLanguage2("en_US.UTF-8"));
console.log(extractLanguage2("en_GB.UTF-8"));
console.log(extractLanguage2("ko_KR.UTF-16"));
