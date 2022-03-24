//VALUES AND VARIABLES
const country = "Portugal";
const continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

//DATA TYPES
const isIsland = false;
let language = "portuguese";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//LET, CONST and VAR
//changed some variables from let to const from the previous exercises

//BASIC OPERATORS
let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population < averagePopulation);
let description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;
console.log(description);

//Strings and Template Literals

description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

// Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}

//Type Conversion and Coercion
/* 1. Predict the result of these 5 operations without executing them:
'9' - '5'; = 4
'19' - '13' + '17'; = 617
'19' - '13' + 17; = 23
'123' < 57; = false
5 + 6 + '4' + 9 - 4 - 2; = 1143
*/

//Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

//Logical Operators

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

//The switch Statement

language = "pt";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too!");
}

//Functions

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} population and its capital city is ${capitalCity}`;
}

describePortugal = describeCountry("Portugal", 11, "Lisboa");
describeSpain = describeCountry("Spain", 48, "Madrid");
describeFrance = describeCountry("France", 68, "Paris");

console.log(describePortugal);
console.log(describeSpain);
console.log(describeFrance);

//Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return +((population / 7900) * 100).toFixed(2);
}
const percPortugal1 = percentageOfWorld1(11);
const percSpain1 = percentageOfWorld1(48);
const percFrance1 = percentageOfWorld1(68);

console.log(percPortugal1, percSpain1, percFrance1);

const percentageOfWorld2 = function (population) {
  return +((population / 7900) * 100).toFixed(2);
};
const percPortugal2 = percentageOfWorld2(11);
const percSpain2 = percentageOfWorld2(48);
const percFrance2 = percentageOfWorld2(68);

console.log(percPortugal2, percSpain2, percFrance2);

//Arrow Functions

const percentageOfWorld3 = (population) =>
  +((population / 7900) * 100).toFixed(2);

const percPortugal3 = percentageOfWorld3(11);
console.log(percPortugal3);

//Functions Calling Other Functions

function describePopulation(country, population) {
  const description = `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
  console.log(description);
}

describePopulation("Portugal", 11);
describePopulation("Spain", 48);
describePopulation("France", 68);

// Introduction to Arrays

const populations = [11, 48, 68, 330];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

//Basic Array Operations (Methods)

const neighbours = ["Belgica", "França", "Alemanha"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Alemanha")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Alemanha")] = "Mexico";
console.log(neighbours);

if (!neighbours.includes("Alemanha")) {
  console.log("Probably not a central European country :D");
}

//Introduction to Objects

const myCountry = {
  country: "Chile",
  capital: "Santiago",
  language: "castelhano",
  population: 19,
  neighbours: ["Peru", "Bolivia", "Argentina"],
  //Object Methods *
  describe: function () {
    return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

// Dot vs. Bracket Notation

//'Finland has 6 million finnish-speaking people, 3 neighbouring countries
//and a capital called Helsinki.'
console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
// Object Methods *
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);

//Iteration: The for Loop

for (voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

/////Looping Arrays, Breaking and Continuing
//Let's bring back the 'populations' array from a previous assignment
//const populations = [11, 48, 68, 330];

percentages2 = [];

for (i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++)
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
}

//The while Loop

let percentages3 = [];
let z = 0;

while (z < populations.length) {
  percentages3.push(percentageOfWorld1(populations[z]));
  z++;
}
console.log(percentages3);
