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

// Exercise Level - 2
// Quesion - 1
/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

score = prompt("Enter your score: ");
switch (true) {
  case 80 <= score && score <= 100:
    console.log("Your Grade is A.");
    break;
  case 70 <= score && score < 80:
    console.log("Your Grade is B.");
    break;
  case 60 <= score && score < 70:
    console.log("Your Grade is C.");
    break;
  case 50 <= score && score < 60:
    console.log("Your Grade is D.");
    break;
  default:
    console.log("Your Grade is F.");
}

// Question - 2
/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
month = prompt("Enter the month");
month = month.toLowerCase();
console.log(month);
switch (true) {
  case month === "september" || month === "october" || month === "november":
    console.log("The season is Autumn.");
    break;
  case month === "december" || month === "january" || month === "february":
    console.log("The season is Winter.");
    break;
  case month === "march" || month === "april" || month === "May":
    console.log("The season is Spring.");
    break;
  case month === "june" || month === "july" || month === "august":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Your choice is wrong!!");
}

// Question - 3
/* 
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

day = prompt("What is the day   today? ").toLowerCase();
console.log(
  day === "saturday" || day === "sunday"
    ? `${day} is a weekend.`
    : `${day} is a working day.`
);
