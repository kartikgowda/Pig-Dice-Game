# Pig Dice Game <!-- omit from toc -->

![Badge](https://img.shields.io/badge/version-1.0.0-blue)

## Introduction

This project is a web-based implementation of the classic Pig Dice Game.

It showcases my skills in **HTML, CSS, and JavaScript**, as well as my understanding of **DOM manipulation** and **event handling** in JavaScript.

## Table of Contents <!-- omit from toc -->

- [Introduction](#introduction)
- [Implementation](#implementation)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [About Game](#about-game)
  - [Rules](#rules)
- [Installation](#installation)
- [How to play](#how-to-play)

## Implementation

The game is implemented as a single-page application. The user interface is built using HTML and CSS, and the game logic is implemented in JavaScript.

### HTML

The HTML structure is defined in index.html. It includes sections for each player, with areas to display the player's current score and total score. There are also buttons to start a new game, roll the dice, and hold the current score.

### CSS

The visual styles for the game are defined in style.css. It uses the Nunito font from Google Fonts, and includes styles for the game layout, player sections, scores, buttons, and the dice image.

### JavaScript

The game logic is implemented in script.js. It uses the 'strict' mode for more robust error checking. The script selects elements from the DOM, sets up the initial state of the game, and defines event listeners for the game buttons. The game state is updated based on the results of dice rolls and player actions.

## About Game

Pig is a simple dice game where players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.

### Rules

- The game has 2 players, playing in rounds.

- In each turn, a player rolls a dice as many times as he wishes.
- Each result gets added to his round score.

- But, if the player rolls a 1, all his round score gets lost. After that, it's the next player's turn.

- The player can choose to 'Hold', which means that his round score gets added to his global score. After that, it's the next player's turn.

- The first player to reach 100 points on the global score wins the game.

## Installation

To set up a local copy of this project, follow these steps:

Clone the repository:

```bash
git clone https://github.com/kartikgowda/Pig-Dice-Game.git
```

**To play the game, open `index.html` in a web browser.**

## How to play

1. **Start the game**: Click the "New game" button to start a new game.
2. **Roll the dice**: During your turn, click the "Roll dice" button to roll the dice.
3. **Calculate score**: Your current score is the total of your dice rolls.
4. **Switch turns**: If you roll a 1, you lose your current score, and it's the next player's turn.
5. **Hold score**: You can choose to "Hold" your current score at any time, which adds your current score to your total score, and ends your turn.
6. **Winning condition**: The game continues until a player reaches a total score of 100, who is then declared the winner.
