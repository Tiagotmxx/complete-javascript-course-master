'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//function used to reduce repetitions of document.querySelector('.message').textContent (cleaner code)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    //When player wins
  } else if (guess === SecretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? ' Too high!' : ' Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' you lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    //When guess is too high
  }
});

//CHALLENGE
const again = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
