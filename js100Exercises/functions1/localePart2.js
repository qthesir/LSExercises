// Similar to the previous exercise, now write a function that extracts the region code
// from a locale.

const extractRegion = (locale) => {
  // return locale.slice(3, 5);
  // let index1 = locale.indexOf("_");
  // let index2 = locale.indexOf(".");
  // return locale.substring(index1 + 1, index2);
  return locale.split("_")[1].split(".")[0];
};

console.log(extractRegion("en_US.UTF-8"));
console.log(extractRegion("en_GB.UTF-8"));
console.log(extractRegion("ko_KR.UTF-16"));

// Lots of different ways to solve this one!
