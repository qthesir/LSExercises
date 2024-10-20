// The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that?
// Also modify it so that it stops after the first iteration.

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
}

// This loop is continuing on forever because it has no halting condition. Without an
// explicit halting condition, JS treats it as true, and continues the loop.

// Other way to terminate the code is use the break statement. 