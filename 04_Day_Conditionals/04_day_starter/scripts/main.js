// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')
// **************************Exercise**********************************
// **************************Level - 1 ********************************

age = prompt("Enter your age: ");
if (age >= 18) console.log("You are old enough to drive.");
else console.log(`You are left with ${18 - age} years to drive.`);

if (age === 30) console.log("We have same age.");
else if (age > 30) console.log(`You are ${age - 30} year older then me.`);
else console.log(`You are ${30 - age} year younger then me.`);
