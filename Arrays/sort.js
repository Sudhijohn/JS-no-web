'use strict';
const teams = [
	{
		name: 'Arsenal',
		position: 1,
		gamesPlayed: 20,
		wins: 15,
		loss: 2,
		draws: 3,
		points: 48,
  },
	{
		name: 'Manchester City',
		position: 2,
		gamesPlayed: 21,
		wins: 14,
		loss: 3,
		draws: 3,
		points: 48,
  },
	{
		name: 'Manchester United',
		position: 3,
		gamesPlayed: 20,
		wins: 13,
		loss: 3,
		draws: 3,
		points: 42,
  },
];

console.log(teams);

teams.sort(sortTeams);

console.log(teams);

function sortTeams(team1, team2) {
	return team1.position - team2.position;
}