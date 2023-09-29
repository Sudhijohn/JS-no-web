const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    if (players.length) {
      console.log(`score is ${this.score}`);
      players.forEach(player => {
        this.scored.indexOf(player) !== -1 && console.log(`${player} scored during the match`);
      })
    } else {
      console.log(`No player names are selected, score is ${this.score}`);
    }


  }
};

const [players1, players2] = game.players;
console.log(`Players Array`);
console.log(players1, players2);
console.log(`------------------------------`);

const [gk, ...fieldPlayers] = players1;
console.log(`Bayern Gk and Field Players`);
console.log(gk, fieldPlayers);
console.log(`------------------------------`);

const allPlayers = [...players1, ...players2];
console.log(`Combined Team`);
console.log(allPlayers);
console.log(`------------------------------`);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`Bayern Playing team`);
console.log(players1Final.length, players1Final);
console.log(`------------------------------`);

const {
  team1,
  x: draw,
  team2
} = game.odds;
console.log('Odds');
console.log(`Team 1 : ${team1}
Team 2 : ${team2}
draw : ${draw}`)
console.log(`------------------------------`);


console.log('Goals during the match');
//game.printGoals();
//game.printGoals('Lewandowski', 'Coutinjo');
game.printGoals(...game.scored);
console.log(`------------------------------`);

console.log(`Prediction`);
console.log(team1 < team2 && `Prediction: Team 1 will likely to win this match`);
console.log(`------------------------------`);