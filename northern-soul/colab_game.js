// const pickHero = require("pickHero");
const inquirer = require('inquirer');

const { questions } = require('northern-soul/questions.js');

class Northerner {
  _health;
  _hunger;
  _drunkStatus;
  _boredom;
  _isAlive = true;
  _status;

  constructor(name) {
    this._name = name;
    this._health = 100;
    this._hunger = 0;
    this._drunkStatus = 0;
    this._boredom = 0;
    this._status = 'Your Alive & drunk';
  }

  get name() {
    return this._name;
  }
  get health() {
    return this._health;
  }
  get hunger() {
    return this._hunger;
  }
  get drunkStatus() {
    return this._drunkStatus;
  }
  get boredom() {
    return this._boredom;
  }
  get stats() {
    return console.table({
      name: this._name,
      health: this._health,
      hunger: this._hunger,
      drunkStatus: this._drunkStatus,
      boredom: this._boredom,
    });
  }
  get status() {
    return this._status;
  }

  set status(msg) {
    this._status = msg;
  }

  checkStats() {
    if (this._health <= 0) {
      this._isAlive = false;
      this.status = `${this.name} has died from malnutrition. Please make sure you take them to the Rovers more often next time!`;
    }
    if (this._boredom >= 50) {
      this._isAlive = false;
      this.status = `${this.name} has ran away on a night out to the local. "Fone iz switch'd off! x"`;
    }
  }

  drinks() {
    this.drunkStatus(-5);
    if (this.drunkStatus < 0) this._drunkStatus = 0;
    console.log(`Aaaaah, ${this.name} get another one in r kid`);
    return this.drunkStatus;
  }

  async eats() {
    const { food } = await enquirer.prompt(questions.eat);

    if (food === 'PorkScratchings') this.hunger(-2);
    if (food === 'HotPot') this.hunger(-5);
    if (food === 'Kebab') this.hunger(-10);

    return this._hunger;
  }

  hunger(num) {
    this._hunger += num;

    if (this._hunger < 0) this._hunger = 0;
    if (this._hunger > 25) this.health(-5);
    if (this._hunger > 40) {
      this.health(-5);
      this.boredom(5);
    }
    return this.checkStats();
  }

  drunkStatus(num) {
    this._drunkStatus += num;

    if (this._drunkStatus < 0) this._drunkStatus = 0;
    if (this._drunkStatus > 25) this.health(-5);
    if (this._drunkStatus > 40) {
      this.health(-5);
      this.boredom(5);
    }
    return this.checkStats();
  }

  health(num) {
    this._health += num;
    if (this._health < 0) this._health = 0;
  }

  boredom(num) {
    this._boredom += num;
    if (this._boredom < 0) this._boredom = 0;

    return this.checkStats();
  }
}

module.exports = {
  Northerner,
};