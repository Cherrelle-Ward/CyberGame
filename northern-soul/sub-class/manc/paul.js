// MANC = DOG

const inquirer = require('inquirer');


const { questions } = require('questions.js');
const { Northerner } = require('sub-class\manc');

class Manc extends Northerner {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.MancPlay);

    if (play === 'oasis') this.boredom(-2);
    if (play === 'beatles') this.boredom(-5);
    if (play === 'chopin') this.boredom(-10);
  }
}

module.exports = {
  Manc,
};