// this is your main.js script

// alert('Open the browser console whenever you work on JavaScript')
// **************************Exercise**********************************
// **************************Level - 1 ********************************
// Quesion - 1
age = prompt("Enter your age: ");
if (age >= 18) console.log("You are old enough to drive.");
else console.log(`You are left with ${18 - age} years to drive.`);

// Question - 2
if (age === 30) console.log("We have same age.");
else if (age > 30) console.log(`You are ${age - 30} year older then me.`);
else console.log(`You are ${30 - age} year younger then me.`);

// Question - 3
const a = 4,
  b = 3;
if (a > b) console.log(`${a} is greater then ${b}.`);
else console.log(`${a} is less then ${b}.`);

console.log(a > b ? `${a} is greater then ${b}.` : `${a} is less then ${b}.`);

// Question - 4
// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt("Enter a number: ");
console.log(
  number % 2 === 0
    ? `${number} is an even number.`
    : `${number} is a odd number.`
);
