'use strict';

let userName = prompt("Hello, welcome to my site! What's your name?")
alert("Oh, hello " + userName + "! Thanks for coming by.")

alert("Let's play a game where I quiz you about me to see how much you know. Just type yes or no.")

let origin = prompt("First: was I raised in Maryland?");
console.log(origin);

let lowerCaseOrigin = origin.toLowerCase();
console.log(lowerCaseOrigin);

if (lowerCaseOrigin === 'yes' || lowerCaseOrigin === 'y') {
  alert("That is correct!");
} else {
  alert("Actually I was raised in Maryland");
}

let eyeColor = prompt("Do I have blue eyes? Please type yes or no.");
console.log(eyeColor);

let lowerCaseEyeColor = eyeColor.toLowerCase();
console.log(lowerCaseEyeColor);

if (lowerCaseEyeColor === 'yes' || lowerCaseEyeColor === 'y') {
  alert("You're half right: I have heterochromia. One eye is blue, the other is hazel.");
} else {
  alert("I don't have blue eyes, I have heterochromia. One eye is blue, but the other is hazel.");
}

let degree = prompt("Do I have a degree?");
console.log(degree);

let lowerCaseDegree = degree.toLowerCase();

if (lowerCaseDegree === 'yes' || lowerCaseDegree === 'y') {
  alert("Yup, I have a BA in English.");
} else {
  alert("I do have a degree, but not in CS. It's in English.");
}

let play = prompt("Have I performed any shakespeare?");
console.log(play);

let lowerCasePlay = play.toLowerCase();

if (lowerCasePlay === 'yes' || lowerCasePlay === 'y') {
  alert("Yes, I was in Romeo and Juliet TWICE!");
} else {
  alert("I actually have been in a shakespeare play. I've performed Romeo and Juliet twice.");
}

let bartender = prompt("Did I win a national bartender competition?");
console.log(bartender);

let lowerCaseBartender = bartender.toLowerCase();

if (lowerCaseBartender === 'yes' || lowerCaseBartender === 'y') {
  alert("I didn't win, unfortunately, but I did make finals.");
} else {
  alert("Correct. I won regionals but I didn't win the nationals.");
}

alert("Thanks for playing " + userName + "! If you want to know more about me, you should read my whole page!")