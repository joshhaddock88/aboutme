'use strict';
// This is for our linter

//proof of life

console.log('Hello World!');

let userScore = 0;

let userName = prompt('Hello, welcome to my site! What\'s your name?');
while(!userName) {
  userName = prompt('Please type a valid name.')
}
console.log('User name is', userName);
alert('Oh, hello ' + userName + '! Thanks for coming by.');

alert('Let\'s play a game where I quiz you about me to see how much you know. Just type yes or no.');

let fiveQuestions = [
  'First: was I raised in Maryland?',
  'Do I have blue eyes?',
  'Do I have a degree',
  'Have I performed any Shakespeare?',
  'Did I win a national bartender competition?'
]

let yesResponse = [
  'That is correct',
  'You\'re half right: I have heterochromia. One eye is blue, the other hazel.',
  'Yup, I have a BA in English',
  'Yes, I was in Romeo and Juliet TWICE!',
  'I didn\'t win, unfortunately, but I did make finals.'
]

let noResponse = [
  'Wrong. I was raised in Maryland.',
  'That\'s right! I don\'t have blue eyes, I have heterochromia. One eye is blue, the other is hazel.',
  'I do have a dgree, but not in CS. It\'s in English',
  'I actually have been in a Shakespeare play. I\'ve performed Romeo and Juliet twice.',
  'Correct. I won regionals but didn\'t win the nationals.'
]

let answerKey = ['yes', 'no', 'yes', 'yes', 'no'];

let userGuess = [];

for(let i = 0; i < fiveQuestions.length; i++) {
  console.log(i);
  userGuess[i] = prompt(fiveQuestions[i])
  if(userGuess[i].toLowerCase() === 'yes' || userGuess[i].toLowerCase() === 'y'){
    alert(yesResponse[i]);
  } else if(userGuess[i].toLowerCase() === 'no' || userGuess[i].toLowerCase() === 'n') {
    alert(noResponse[i]);
  } else {
    alert('Invalid response, please try again.')
    i--;
  }
  if(userGuess[i].toLowerCase() === answerKey[i]){
    userScore += 1;
    console.log(userScore);
  } console.log(i);
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