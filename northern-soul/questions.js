const questions = {
eat: {
    type: 'list',
    name: 'food',
    message: `What do you want to feed ${this.name}?`,
    choices: [
    {
        key: 'a',
        name: 'PorkScratchings: hunger -2',
        value: 'PorkScratchings',
    },
    {
        key: 'b',
        name: 'HotPot: hunger -5',
        value: 'HotPot',
    },
    {
        key: 'c',
        name: 'Kebab: hunger -10',
        value: 'Kebab',
    },
    ],
},

ScouserPlay: {
    type: 'list',
    name: 'play',
    message: 'Im getting bored!',
    choices: [
    {
        key: 'a',
        name: 'Play Music: boredom -2',
        value: 'Music',
    },
    {
        key: 'b',
        name: 'Play Playstation: boredom -5',
        value: 'VideoGame',
    },
    {
        key: 'c',
        name: 'Party Time: boredom -10',
        value: 'HouseParty',
    },
    ],
},
//   DOGPLAY
MancPlay: {
    type: 'list',
    name: 'play',
    message: 'What music do you would to listen to?',
    choices: [
    {
        key: 'a',
        name: 'Oasis: boredom -2',
        value: 'oasis', /* from stick to oasis*/
    },
    {
        key: 'b',
        name: 'Beatles: boredom -5',
        value: 'beatles', /* from ball to beatles*/
    },
    {
        key: 'c',
        name: 'Chopin: boredom -10',
        value: 'chopin', /* from chase to chopin*/
    },
    ],
},



typeOfnortherner: {
    type: 'list',
    name: 'typeOfNortherner',
    message:
    'What type of Northerner would you like? Please choose from the following options:',
    choices: [
    {
        key: 'a',
        name: 'Scouser',
        value: 'scouser',
    },
    {
        key: 'b',
        name: 'Manc',
        value: 'manc',
    },
    
    
choices: {
    type: 'list',
    name: 'choices',
    message: 'What would you like to do?',
    choices: [
    {
        key: 'a',
        name: 'Play with your Northerner',
        value: 'play',
    },
    {
        key: 'b',
        name: 'Feed your Northerner',
        value: 'feed',
    },
    {
        key: 'c',
        name: 'Give your Northerner a beer',
        value: 'drink',
    },
    {
        key: 'd',
        name: "Check on your Northerner",
        value: 'status',
    },
    {
        key: 'e',
        name: 'Quit the game',
        value: 'quit',
    },
    ],
},

quitChoice: {
    type: 'list',
    name: 'quitChoice',
    message:
    'Are you sure you want to quit? This will mean your Northerner has to be returned to Department for Work and Pensions to be destroyed...',
    choices: [
    {
        key: 'a',
        name: "Yes, I'm sure.",
        value: 'yes',
    },
    {
        key: 'b',
        name: "No, I'll play some more.",
        value: 'no',
    },
    ],
},

playAgain: {
    type: 'list',
    name: 'playAgain',
    message: 'Would you like to play again?',
    choices: [
    {
        key: 'a',
        name: 'Yes',
        value: 'yes',
    },
    {
        key: 'b',
        name: 'No',
        value: 'no',
    },
    ],
},
}};

module.exports = {
questions,
};
