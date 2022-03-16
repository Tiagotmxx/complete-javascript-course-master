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
