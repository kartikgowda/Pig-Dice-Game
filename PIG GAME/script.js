'use strict';

//! Selecting Elements for DOM
//* Displaying the current player background color
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

//* Selecting Scores
let scorePlayer = 0;
const scorePlayer0El = document.querySelector('#score--0');
let scorePlayer0 = 0;
const scorePlayer1El = document.querySelector('#score--1');
let scorePlayer1 = 0;
let currentScore = 0;
const currentScore0El = document.querySelector('#current--0');
let currentScore0 = 0;
const currentScore1El = document.querySelector('#current--1');
let currentScore1 = 0;

let createTesetel = 1;
//TODO: Use array to sotre the current values of the total
//TODO:  let totalScore = [0,0];

//TODO: Create fucntion for DRY priniciple
//TODO: swtichPlayer

//* Selecting Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let activePlayer = 0;

//* Dice Elements
const dice = document.querySelector('.dice');

//! Setting up the board
btnNew.addEventListener(`click`, () => {
  //* Resetting the scores to 0
  scorePlayer0El.textContent = 0;
  scorePlayer1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  //* Hiding the dice before the game starts
  dice.classList.add('hidden');
});

//! Rolling the dice
btnRoll.addEventListener(`click`, () => {
  //* Creating the dice roll
  let diceRoll = Math.trunc(Math.random() * 6 + 1);

  //* Displaying the dice roll
  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  //* Adding the dice rolls to current score
  //? If dice roll is not 1
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    activePlayer === 0
      ? (currentScore0El.textContent = currentScore)
      : (currentScore1El.textContent = currentScore);
    //? If dice roll is 1 then switch the player
  } else {
    currentScore = 0;
    activePlayer === 0
      ? (currentScore0El.textContent = 0)
      : (currentScore1El.textContent = 0);
    // console.log(currentScore0);
    activePlayer = activePlayer === 0 ? 1 : 0; //
  }
});

//! Holding the score
btnHold.addEventListener(`click`, () => {
  // TODO : Use arrays to store scores
  if (currentScore !== 0) {
    activePlayer === 0
      ? (scorePlayer0 += currentScore)
      : (scorePlayer1 += currentScore);
    activePlayer === 0
      ? (scorePlayer0El.textContent = scorePlayer0)
      : (scorePlayer1El.textContent = scorePlayer1);
    currentScore = 0;
    // TODO : To implement DRY principle
    activePlayer = activePlayer === 0 ? 1 : 0; //
  }
});
