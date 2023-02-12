// this is your main.js script
// ===============Level 1 =============
const firstName = "Mujeeb";
const lastName = "Ur Rahman";
const country = "Pakistan";
const city = "Karachi";
const age = 30;
const isMarried = false;
const year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log("10" === 10);

console.log(parseInt("9.8") === 10);

console.log(10 === 10);
console.log(true === true);
console.log("Mujeeb" === "Mujeeb");

console.log(parseInt("10") === 10.1);
console.log("" === undefined);
console.log("two" === 2);

let python = "python".length;
let jargon = "jargon".length;
console.log(python !== jargon);

let firstCondition = "python".includes("on");
let secondCondition = "dragon".includes("on");
console.log(!(firstCondition === secondCondition));

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());

// there are two way to solve the question no.7 part 7
const oldDate = new Date("January 1, 1970");
console.log(parseInt((date - oldDate) / 1000));

var desiredDate = new Date();
var unixTimestamp = Date.parse(desiredDate);
var elapsedSeconds = unixTimestamp / 1000;
console.log(elapsedSeconds);

// ================ level 2 ================
const base = prompt("Enter base: ");
const height = prompt("Enter height: ");
const area = 0.5 * base * height;
console.log("The area of the triangle is ", area);

const sideA = prompt("Enter side a: ");
const sideB = prompt("Enter side b: ");
const sideC = prompt("Enter side c: ");
const perimeter = sideA + sideB + sideC;
console.log("The perimeter of the triangle is ", perimeter);

const length = prompt("Enter length: ");
const breadth = prompt("Enter breadth: ");
const areaOfRectangle = 2 * length * breadth;
console.log("The area of the rectangle is ", areaOfRectangle);

const radius = prompt("Enter radius: ");
const circumference = 2 * Math.PI * radius;
const areaOfCircle = Math.PI * radius * radius;
console.log("The circumference of the circle is", circumference);
console.log("The area of the circle is ", areaOfCircle);

console.log("slope of y = 2x - 2 ", 2);
console.log(
  "slope between point(2, 2) and point(6, 10) is ",
  (10 - 2) / (6 - 2)
);

console.log(2 === (10 - 2) / (6 - 2));

const hrs = prompt("Enter hours: ");
const rate = prompt("Enter rate per hours: ");
console.log("Your weekly earning is ", hrs * rate);

console.log(
  "your name is long enough because length is",
  firstName.length + lastName.length
);

console.log(
  `Your first name, ${firstName} is short than your family name, ${lastName}`
);

let myAge = 30;
let yourAge = 25;

console.log(`I am ${30 - 25} years older than you.`);

let userAge = prompt("Enter number of years you live: ");
console.log(`You lived ${userAge * 365 * 24 * 3600} seconds`);

console.log(
  `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
);

console.log(
  `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);

console.log(
  `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
);

// ================ level 3 ================

const todayYear = date.getFullYear();
const todayMonth = ("0" + (date.getMonth() + 1)).slice(-2);
const todayDate = ("0" + date.getDate()).slice(-2);
const todayHour = ("0" + date.getHours()).slice(-2);
const todayMinute = ("0" + date.getMinutes()).slice(-2);
const humanReadableTime =
  todayYear +
  "-" +
  todayMonth +
  "-" +
  todayDate +
  " " +
  todayHour +
  ":" +
  todayMinute;

console.log(humanReadableTime);
