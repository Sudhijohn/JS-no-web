const {
	log
} = console;

const airline = 'TAP air portugal';

const airlineName = airline.slice(0);

log(airline[1]);
log(airlineName);

const changeString = "I am going to get the door after the door bell";

const changedString = changeString.replaceAll('door', 'doors');

log(changedString);

log([1, 2, 4].splice(0, 1));