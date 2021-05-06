'use strict';
// This is for our linter

//proof of life

console.log('Hello World!');

let userScore = 0;

let userName = prompt("Hello, welcome to my site! What's your name?");
while(!userName) {
  userName = prompt('Please type a valid name.')
}
console.log('User name is', userName);
alert("Oh, hello " + userName + "! Thanks for coming by.");

alert("Let's play a game where I quiz you about me to see how much you know. Just type yes or no.");

let firstFiveQuestions = ['yes', 'no']

let origin = prompt("First: was I raised in Maryland?");

let lowerCaseOrigin = origin.toLowerCase();
console.log(lowerCaseOrigin);

if (lowerCaseOrigin === 'yes' || lowerCaseOrigin === 'y') {
  alert('That is correct!');
  userScore += 1;
  console.log('User score:', userScore);
} else if (lowerCaseOrigin === 'no' || lowerCaseOrigin === 'n') {
  alert('Actually I was raised in Maryland');
  console.log('User score:', userScore);
} else {
  alert('Not a valid input.')
  console.log('User score:', userScore);
}

let eyeColor = prompt("Do I have blue eyes? Please type yes or no.");

let lowerCaseEyeColor = eyeColor.toLowerCase();
console.log(lowerCaseEyeColor);

if (lowerCaseEyeColor === 'yes' || lowerCaseEyeColor === 'y') {
  alert("You're half right: I have heterochromia. One eye is blue, the other is hazel.");
  console.log('User score:', userScore);
} else if (lowerCaseEyeColor === 'no' || lowerCaseEyeColor === 'n') {
  alert("That's right! I don't have blue eyes, I have heterochromia. One eye is blue, but the other is hazel.");
  userScore += 1;
  console.log('User score:', userScore);
} else {
  alert('Please pay attention to instructions, this was not a valid input.');
  console.log('User score:', userScore);
}

let degree = prompt("Do I have a degree?");

let lowerCaseDegree = degree.toLowerCase();
console.log(lowerCaseDegree);

if (lowerCaseDegree === 'yes' || lowerCaseDegree === 'y') {
  alert("Yup, I have a BA in English.");
  userScore += 1;
  console.log('User score:', userScore);
} else if (lowerCaseDegree === 'no' || lowerCaseDegree === 'n') {
  alert("I do have a degree, but not in CS. It's in English.");
  console.log('User score:', userScore);
} else {
  alert('That is neither yes or no.');
  console.log('User score:', userScore);
}

let play = prompt("Have I performed any shakespeare?");

let lowerCasePlay = play.toLowerCase();
console.log(lowerCasePlay);

if (lowerCasePlay === 'yes' || lowerCasePlay === 'y') {
  alert("Yes, I was in Romeo and Juliet TWICE!");
  userScore += 1;
  console.log('User score:', userScore);
} else if (lowerCasePlay === 'no' || lowerCasePlay === 'n'){
  alert("I actually have been in a shakespeare play. I've performed Romeo and Juliet twice.");
  console.log('User score:', userScore);
} else {
  alert('That answer is unacceptable.');
  console.log('User score:', userScore);
}

let bartender = prompt("Did I win a national bartender competition?");

let lowerCaseBartender = bartender.toLowerCase();
console.log(lowerCaseBartender);

if (lowerCaseBartender === 'yes' || lowerCaseBartender === 'y') {
  alert("I didn't win, unfortunately, but I did make finals.");
  console.log('User score:', userScore);
} else if (lowerCaseBartender === 'no' || lowerCaseBartender === 'n') {
  alert("Correct. I won regionals but I didn't win the nationals.");
  userScore += 1;
  console.log('User score:', userScore);
} else {
  alert('Incorrect response format.');
  console.log('User score', userScore);
}

alert('Let\'s try a different game. I\'m thinking of a number between 1-10. You have four tries to get it right.')

let numberGuess = prompt('What is your first guess?');
console.log('User guess is', numberGuess);

let computerNumber = Math.floor(Math.random() * 10) + 1;
console.log('Computer number is', computerNumber);

for(let i = 0; i < 4; i++) {
  if(numberGuess !== computerNumber && i === 3){
    alert('Sorry, you\'re out of guesses. The number was ' + computerNumber + '.')
    console.log('User score is', userScore)
  } else if(numberGuess == computerNumber){
    alert('Correct, good guess!');
    console.log('User guessed in', i + 1, 'guesses.');
    userScore += 1;
    console.log('User score:', userScore);
    break;
  } else if(numberGuess != computerNumber) {
    if(numberGuess > computerNumber){
      numberGuess = prompt('Your number guess was too high. Try again!');
      console.log('User new guess is', numberGuess);
    } else if (numberGuess < computerNumber){
      numberGuess = prompt('Your number guess was too low. Try again!');
      console.log('User new guess is', numberGuess);
    }
  }
}

const topTen = ['Watership Down', 'Dune', 'Moby Dick', 'Housekeeping', 'For Whom the Bell Tolls', 'So Long, See You Tomorrow', 'Old School', 'Never Let Me Go', 'The Once and Future King', 'My Name is Asher Lev'];

alert('Next, please guess one of my top 10 favorite novels! You\'ll have 6 attempts.')

let novelPick = prompt('Take a guess.');
console.log('User picked', novelPick);
let success = false;

for(let i = 0; i < 6; i++){
  let guessesLeft = 6 - i;
  while(!novelPick){
    novelPick = prompt('Please type the name of a novel. You have ' + guessesLeft + ' guesses left.')
  }
  if(success === true){
    alert('Good job! That is on my list! My full list of novels is ' + topTen + '.');
    break;
  } else if (success === false && i > 0){
    novelPick = prompt('Try again. You have ' + guessesLeft + ' guesses left!');
  }
  for(let j = 0; j < topTen.length; j++){
    if(topTen[j] === novelPick){
      success = true;
      userScore += 1;
      console.log('User score is', userScore);
    }
  } if(i === 5){
    alert('Sorry, you\'re out of guesses. My top 10 books are ' + topTen + '.');
  }
}

alert('Thanks for playing ' + userName + '! Your total score was ' + userScore + ' out of 7! If you want to know more about me, you should read my whole page!');