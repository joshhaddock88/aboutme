'use strict';
// This is for our linter
let userScore = 0; // To keep track of how many correct answers the user has gotten.

function getUserName() {
  let name = prompt('Hello, welcome to my site! What\'s your name?');
  while(!name) { // This is to ensure the user writes SOMETHING.
    name = prompt('Please type a valid name.');
  }
  console.log('User name is', name);
  alert('Oh, hello ' + name + '! Thanks for coming by.');
}



function firstFiveQuestions() {
  let fiveQuestions = [ //List of the first five questions.
    'First: was I raised in Maryland?',
    'Do I have blue eyes?',
    'Do I have a degree',
    'Have I performed any Shakespeare?',
    'Did I win a national bartender competition?'
  ]

  let yesResponse = [ //How the computer responds to yes.
    'That is correct',
    'You\'re half right: I have heterochromia. One eye is blue, the other hazel.',
    'Yup, I have a BA in English',
    'Yes, I was in Romeo and Juliet TWICE!',
    'I didn\'t win, unfortunately, but I did make finals.'
  ]

  let noResponse = [ //How computer responds to no.
    'Wrong. I was raised in Maryland.',
    'That\'s right! I don\'t have blue eyes, I have heterochromia. One eye is blue, the other is hazel.',
    'I do have a dgree, but not in CS. It\'s in English',
    'I actually have been in a Shakespeare play. I\'ve performed Romeo and Juliet twice.',
    'Correct. I won regionals but didn\'t win the nationals.'
  ]

  let answerKey = ['yes', 'no', 'yes', 'yes', 'no'];

  let userGuess = [];

  for(let i = 0; i < fiveQuestions.length; i++) { //loops through questsions and responses.
    console.log('i value at start', i);
    userGuess[i] = prompt(fiveQuestions[i]);
    if(userGuess[i].toLowerCase() === 'yes' || userGuess[i].toLowerCase() === 'y'){
      alert(yesResponse[i]);
      if(userGuess[i].toLowerCase() === answerKey[i]){
        userScore += 1;
      }
    } else if(userGuess[i].toLowerCase() === 'no' || userGuess[i].toLowerCase() === 'n') {
      alert(noResponse[i]);
      if(userGuess[i].toLowerCase() === answerKey[i]){
        userScore += 1;
      }
    } else {
      alert('Invalid response, please try again.');
      i--; // Keeps the loop going as long as the user types incorrect input.
    }
    console.log('userScore current',userScore);
    console.log('i value at end',i);
  }
} 

function numberGuessingGame() {
  alert('Let\'s try a different game. I\'m thinking of a number between 1-10. You have four tries to get it right.');

  let numberGuess = prompt('What is your first guess?');
  console.log('User guess is', numberGuess);

  let computerNumber = Math.floor(Math.random() * 10) + 1;
  console.log('Computer number is', computerNumber);

  for(let i = 4; i > 0; i--) {
    if(numberGuess == computerNumber){
      alert('Correct, good guess!');
      console.log('User guessed in', i + 1, 'guesses.');
      userScore += 1;
      console.log('User score:', userScore);
      break;
    } else if(numberGuess != computerNumber) {
      if(numberGuess > computerNumber){
        if(i === 1) {
          alert('Sorry, you\'re out of guesses. My number was ' + computerNumber + '.');
          break;
        }
        numberGuess = prompt('Your number guess was too high. Try again!');
        console.log('User new guess is', numberGuess);
      } else if (numberGuess < computerNumber){
        if(i === 1) {
          alert('Sorry, you\'re out of guesses. My number was ' + computerNumber + '.');
          break;
        }
        numberGuess = prompt('Your number guess was too low. Try again!');
        console.log('User new guess is', numberGuess);
      }
    }
  }
}

function topTenNovels() {
  const topTen = ['Watership Down', 'Dune', 'Moby Dick', 'Housekeeping', 'For Whom the Bell Tolls', 'So Long, See You Tomorrow', 'Old School', 'Never Let Me Go', 'The Once and Future King', 'My Name is Asher Lev'];

  alert('Next, please guess one of my top 10 favorite novels! You\'ll have 6 attempts.');

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
    for(let j = 0; j < topTen.length; j++){// allows each guess to loop through all possible answers
      if(topTen[j] === novelPick){
        success = true;
        userScore += 1;
        console.log('User score is', userScore);
      }
    } if(i === 5){
      alert('Sorry, you\'re out of guesses. My top 10 books are ' + topTen + '.');
    }
  }
}

function playGame() {
  let userName = getUserName();
  alert('Let\'s play a game where I quiz you about me to see how much you know. Just type yes or no.');
  firstFiveQuestions();
  numberGuessingGame();
  topTenNovels();
  alert('Thanks for playing ' + userName + '! Your total score was ' + userScore + ' out of 7! If you want to know more about me, you should read my whole page!');
}

//playGame();