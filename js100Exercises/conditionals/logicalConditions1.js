// Predict the output of the following code:

if (false || true) {
  console.log("Yes!");
} else {
  console.log("No....");
}

// This code will always evaluate to true and return 'Yes', because || means or, and thus
// true || false is looking for just one of the two conditions to be true.
