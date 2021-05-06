'use strict';
// This is for our linter

//proof of life

// console.log('Hello World!');

let score = 0;

// let userName = prompt("Hello, welcome to my site! What's your name?");
// console.log('User name is', userName);
// alert("Oh, hello " + userName + "! Thanks for coming by.");

// alert("Let's play a game where I quiz you about me to see how much you know. Just type yes or no.");

// let origin = prompt("First: was I raised in Maryland?");

// let lowerCaseOrigin = origin.toLowerCase();
// console.log(lowerCaseOrigin);

// if (lowerCaseOrigin === 'yes' || lowerCaseOrigin === 'y') {
//   alert("That is correct!");
//   score += 1;
//   console.log('User score:', score);
// } else {
//   alert("Actually I was raised in Maryland");
// }

// let eyeColor = prompt("Do I have blue eyes? Please type yes or no.");

// let lowerCaseEyeColor = eyeColor.toLowerCase();
// console.log(lowerCaseEyeColor);

// if (lowerCaseEyeColor === 'yes' || lowerCaseEyeColor === 'y') {
//   alert("You're half right: I have heterochromia. One eye is blue, the other is hazel.");
// } else {
//   alert("That's right! I don't have blue eyes, I have heterochromia. One eye is blue, but the other is hazel.");
//   score += 1;
//   console.log('User score:', score)
// }

// let degree = prompt("Do I have a degree?");

// let lowerCaseDegree = degree.toLowerCase();
// console.log(lowerCaseDegree);

// if (lowerCaseDegree === 'yes' || lowerCaseDegree === 'y') {
//   alert("Yup, I have a BA in English.");
//   score += 1;
//   console.log('User score:', score);
// } else {
//   alert("I do have a degree, but not in CS. It's in English.");
// }

// let play = prompt("Have I performed any shakespeare?");

// let lowerCasePlay = play.toLowerCase();
// console.log(lowerCasePlay);

// if (lowerCasePlay === 'yes' || lowerCasePlay === 'y') {
//   alert("Yes, I was in Romeo and Juliet TWICE!");
//   score += 1;
//   console.log('User score:', score);
// } else {
//   alert("I actually have been in a shakespeare play. I've performed Romeo and Juliet twice.");
// }

// let bartender = prompt("Did I win a national bartender competition?");

// let lowerCaseBartender = bartender.toLowerCase();
// console.log(lowerCaseBartender);

// if (lowerCaseBartender === 'yes' || lowerCaseBartender === 'y') {
//   alert("I didn't win, unfortunately, but I did make finals.");
// } else {
//   alert("Correct. I won regionals but I didn't win the nationals.");
//   score += 1;
//   console.log('User score:', score);
// }

// alert('Let\'s try a different game. I\'m thinking of a number between 1-10. You have four tries to get it right.')

// let numberGuess = prompt('What is your first guess?');
// console.log('User guess is', numberGuess);

// let computerNumber = Math.floor(Math.random() * 10) + 1;
// console.log('Computer number is', computerNumber);

// for(let i = 0; i < 4; i++) {
//   if(i === 3){
//     alert('Sorry, you\'re out of guesses. The number was ' + computerNumber + '.')
//   } else if(numberGuess == computerNumber){
//     alert('Correct, good guess!');
//     console.log('User guessed in', i + 1, 'guesses.');
//     score += 1;
//     console.log('User score:', score);
//     break;
//   } else if(numberGuess != computerNumber) {
//     if(numberGuess > computerNumber){
//       numberGuess = prompt('Your number guess was too high. Try again!');
//       console.log('User new guess is', numberGuess);
//     } else if (numberGuess < computerNumber){
//       numberGuess = prompt('Your number guess was too low. Try again!');
//       console.log('User new guess is', numberGuess);
//     }
//   }
// }

const topTen = ['Watership Down', 'Dune', 'Moby Dick', 'Housekeeping', 'For Whom the Bell Tolls', 'So Long, See You Tomorrow', 'Old School', 'Never Let Me Go', 'The Once and Future King', 'My Name is Asher Lev'];

// alert('Next, please guess one of my top 10 favorite novels! You\'ll have 6 attempts.')

let novelPick = prompt('Take a guess.');
console.log('User picked', novelPick);
let success = false;

for(let i = 0; i < 6; i++){
  let guessesLeft = 6 - i;
  while(!novelPick){
    novelPick = prompt('Please type the name of a novel. You have ' + guessesLeft + ' guesses left.')
  }
  if(success === true){
    alert('Good job! That is on my list!')
    break;
  }
  for(let j = 0; j < topTen.length; j++){
    if(topTen[j] === novelPick){
      success = true;
      score++;
    }
  }
}

let userName = 'Joshua';
alert('Thanks for playing ' + userName + '! Youre total score was ' + score + ' out of 7! If you want to know more about me, you should read my whole page!');