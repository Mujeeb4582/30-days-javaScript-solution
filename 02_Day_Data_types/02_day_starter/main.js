// this is your main.js script
// Exercise: Level 1
// =============================================================
let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 6));
console.log(challenge.substring(3, challenge.length));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(""));
console.log(challenge.split(" "));
let socialMedia = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(socialMedia);
console.log(socialMedia.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let testString =
  "You cannot end a sentence with because because because is a conjunction";
console.log(testString.indexOf("because"));
console.log(testString.lastIndexOf("because"));
console.log(testString.search("because"));
let newString = "     30 Days of JavaScript     ";
console.log(newString.trim());
console.log(challenge.startsWith("30 Days"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/gi));
console.log("30 Days of".concat(" JavaScript"));
console.log(challenge.repeat(2));

// =================================================================
// =======Level 2============
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

let number = "10";
console.log(typeof number);
console.log(typeof parseInt(number));
console.log(typeof +number);
console.log(Math.round(parseFloat("9.8")));
let str1 = "python and jargon";
console.log(str1.match(/on/gi));
console.log("I hope this course is not full of jargon".match(/jargon/gi));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));
let str2 = "JavaScript";
let index = Math.floor(Math.random() * str2.length);
console.log("index", index);
console.log(str2[index]);
const pattern = "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(pattern);

// ============Level-3 ============
let quote =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(quote.match(/love/gi).length);

console.log(testString.match(/because/gi).length);
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const cleanSentence = sentence.replace(/[^a-z\s]/gi, "");
console.log(cleanSentence);
const cleanSentenceArray = cleanSentence.split(" ");
console.log(cleanSentence.match(/love/g).length);

const annualIncomeSentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const annualIncomeArray = annualIncomeSentence.match(/\d+/g);
console.log(annualIncomeArray);
console.log(
  `Total annual income is equal to ${
    +annualIncomeArray[0] + +annualIncomeArray[1] + +annualIncomeArray[2]
  }.
`
);
