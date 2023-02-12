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
