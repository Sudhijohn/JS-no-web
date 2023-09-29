const airIndia = {
	code: 'INA',
	name: 'AIR INDIA'
};
const indigo = {
	code: 'IN',
	name: 'INDIGO'
};

function bookFlight(flightNo, time) {
	console.log(`The ticket is booked in ${flightNo} at ${time} in ${this.name}`);
}

bookFlight.call(airIndia, 123, '8:00');

const ticketDetails = [456, '7:00'];

bookFlight.apply(indigo, ticketDetails);
bookFlight.call(airIndia, ...ticketDetails);

function bookBangaloreFlight(flightNo, time) {
	console.log(`The ticket is booked in ${flightNo} at ${time} in ${this.name}`);
}

const bangloreBookings = bookBangaloreFlight.bind(airIndia, 123);

bangloreBookings('09:00');