// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ["fossil", "solar", "wind", "tidal", "fusion"];

// energy = energy.slice(1);
energy.shift();

// energy[energy.length] = "geothermal";
energy.push("geothermal"); // adds the end... I thought it added to the beginning. Weird.

console.log(energy);
