// Refactor the function below using arrow syntax. Line 9 should still log the same sentance:

const template = "I VERB NOUN";

const sentence = (verb, noun) =>
  template.replace("VERB", verb).replace("NOUN", noun);

console.log(sentence("like", "birds"));

// To omit the return fuction, the number of statements counts, not the number of lines. 
// This statement could traverse multiple lines, but JavaScript considers a chain of methods 
// to be a single statement. Believe its the same in Python as well. 