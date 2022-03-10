// PET NORTHERNER INFO
const inquirer = require('inquirer');

const { questions } = require('northern-soul\questions.js');

const { Scouser } = require('northern-soul\sub-class\scouser\corkhill.js')
const { Manc } = require("northern-soul\sub-class\manc\paul.js")

// let myNotherner;
let myNotherner;

async function start() {
const { typeOfNortherner } = await inquirer.prompt(questions.typeOfNortherner);

const { northernerName } = await inquirer.prompt({
type: 'input',
name: 'northernerName',
message: 'What is your Northerner called?',
});

if (typeOfNortherner === 'scouser') myNortherner = new Scouser(northernerName);
else if (typeOfNortherner === 'manc') myNortherner = new Manc(northernerName);

userChoice();
}

async function userChoice() {
myNotherner.boredom(5);
myNotherner.hunger(5);
myNotherner.thirst(5);
myNotherner.stats;

if (!myNotherner._isAlive) {
gameOver();
return;
}

const { choice } = await inquirer.prompt(questions.choice);

if (choice === 'status') console.log(myNotherner.status);
if (choice === 'play') await myNotherner.play();
if (choice === 'feed') await myNotherner.eats();
if (choice === 'drink') await myNotherner.drinks();
if (choice === 'quit') {
const quitChoice = await confirmQuit();
if (quitChoice) return;
}

myNotherner.checkStats();

userChoice();
}

async function confirmQuit() {
const { quitChoice } = await inquirer.prompt(questions.quitChoice);

if (quitChoice === 'yes') return true;
else return false;
}

async function gameOver() {
console.log(myNotherner.status);
const { playAgain } = await inquirer.prompt(questions.playAgain);

if (playAgain === 'yes') start();
else return;
}

start();