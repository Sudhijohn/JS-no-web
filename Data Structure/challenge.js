const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
console.log(`*******************************`);
// console.log(gameEvents.entries());
const gameEvent = [...new Set(gameEvents.values())];
console.log(...gameEvent.entries());
// for (const [minute, event] of gameEvents) {
//   gameEvent.add(event);
// }
console.log(gameEvent);
console.log(`*******************************`);
gameEvents.delete(64);
console.log(gameEvents);
console.log(`*******************************`);
console.log(`An event happened, on an average every ${90/gameEvents.size} minutes`);
console.log(`*******************************`);
const halfTime = 45;
for (const [minute, event] of gameEvents) {
  console.log(`${(minute<=45?'[FIRST':'[SECOND')} HALF]  ${minute} : ${event}`);
}