// Write code that capitalizes the words in the string 'launch school tech & talk',
// so that you get the string 'Launch School Tech & Talk'.

lsStr = "launch school tech & talk";

function capitalize(str) {
  let capitalizedArr = str.split(" ");

  for (let i = 0; i < capitalizedArr.length; i++) {
    capitalizedArr[i] =
      capitalizedArr[i][0].toUpperCase() +
      capitalizedArr[i].slice(1, str.length); // Could have just used 1, JS defaults to end of str. 
  }
  return capitalizedArr.join(" ");
}

console.log(capitalize(lsStr));
