let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (crewStatus) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("The computer is offline");
}


// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?

console.log("No");
// part D) My guess was no, after thinking about it. 
// I assumed the Numbers would evaluate to Boolean before 
// evaluating the inequality. After some testing I've discovered
// that is not the case and I hate it. Anyway, good example of
// why implicit type conversion is the worst. Also, concatinating
// a string changes this behaviour! 

/*
// testing numbers in boolean logic
console.log("\n\n");
console.log("Comp status: " + computerStatusCode);  // always true.
console.log("Space suits on: " + spaceSuitsOn);
console.log("Crew status: " + crewStatus);
console.log("Truthiness of comp status: " + Boolean(computerStatusCode))
console.log(computerStatusCode !== 200);  // evaluates to false 
console.log("Some shit:")
console.log(false || 200 !== 100);

for (i = -1; i < 2; i++) {
  console.log(i + " evals to " + Boolean(i));
}

computerStatusCode = 200;



if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}
*/
