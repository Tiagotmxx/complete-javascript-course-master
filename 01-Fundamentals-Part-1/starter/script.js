/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Tiago";
console.log(firstName); 

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year); 

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; 

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = "Tiago";
const lastName = "Machado";
console.log(firstName + " " + lastName);

//Assignment operatorr
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; 
console.log(now -1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x= y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); */

/* 
//////////////////////////
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �  */
//DATA1
/* let massMark = 78;
const heightMark = 1.69;
const bmiMarK = massMark / heightMark ** 2;

let massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

markHigherBMI = bmiMarK > bmiJohn;

console.log(bmiMarK);
console.log(bmiJohn);
console.log(markHigherBMI);

//DATA2
let massMark2 = 95;
const heightMark2 = 1.88;
const bmiMarK2 = massMark2 / heightMark2 ** 2;

let massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

markHigherBMI2 = bmiMarK2 > bmiJohn2;

console.log(bmiMarK2);
console.log(bmiJohn2);
console.log(markHigherBMI2); 

END OF CHALLENGE


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew); 

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

////////////////////////
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 

let massMark = 78;
const heightMark = 1.69;
const bmiMarK = massMark / heightMark ** 2;

let massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

markHigherBMI = bmiMarK > bmiJohn;

if (bmiMarK > bmiJohn) {
  console.log(`Mark's
  BMI (${bmiMarK.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`);
} else {
  console.log(`John's
  BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
}


//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); //NaN - not a number
console.log(typeof NaN);

//type coercion
console.log("I am " + 23 + " years old"); //convert number to string
console.log("23" - "10" - 3); // converts strings to numbers
console.log("23" + "10" + 3); // converts numbers to strings

console.log(String(23), 23);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let height;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("height is undefined");
}


const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt(`What's your favorite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number.");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not the 23?");


const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

//////////////////////////////////
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// const averageScoreDolphins = (97 + 112 + 101) / 3;
//const averageScoreKoalas = (109 + 95 + 123) / 3;

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 106) / 3;

const averageScoreDolphins = 112;
const averageScoreKoalas = 112;

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("Dolphins wins!");
} else if (
  averageScoreDolphins < averageScoreKoalas &&
  averageScoreKoalas >= 100
) {
  console.log("Koalas wins!");
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreKoalas >= 100 &&
  averageScoreDolphins >= 100
) {
  console.log("Draw");
} else {
  console.log("No team wins! Scored less than 100");
}


const day = "monday";

switch (day) {
  case "monday": //day === monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thrusday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thrusday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}


const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2); //if muito mais linhas de codigo vs o ternary operator

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

////////////////////////////
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
