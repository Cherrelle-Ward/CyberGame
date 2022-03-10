// SCOURSER = CAT

const inquirer = require('inquirer');

const { questions } = require('questions.js');
const { Northerner } = require('sub-class\scouser');

class Scouser extends Northerner {
  constructor(name) {
    super(name);
  }

  async play() {
    const { play } = await inquirer.prompt(questions.ScourserPlay);

    if (play === 'Music') this.boredom(-2);
    if (play === 'VideoGame') this.boredom(-5);
    if (play === 'houseParty') this.boredom(-10);
  }
}

module.exports = {
  Scouser,
};