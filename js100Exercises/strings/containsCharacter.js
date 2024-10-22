// write code that checks whether the string contains the character x.

let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";

function checkX(sequence) {
  x = sequence.split("").filter((char) => char === "x")[0];
  return x === "x";
}

// More elegant solution

function checkX2(sequence) {
  foundX = sequence.indexOf("x");
  return foundX !== -1;
}

// Most elegant solution

console.log(byteSequence.includes("x"));

// Without using any methods

function checkX3(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === "x") {
      return true;
    }
  }

  return false;
}

console.log(checkX(byteSequence));
console.log(checkX2(byteSequence));
console.log(checkX3(byteSequence));
