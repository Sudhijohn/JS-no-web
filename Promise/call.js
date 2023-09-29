// Importing https module
const http = require('http');

var server = http.createServer(function (req, response) { // 2 - creating server

	if (req.url == '/') { //check the URL of the current request

		fetchData(response);
		// set response content    
		// response.write('<html><body><p>This is home Page.</p></body></html>');
		// response.end();

	}

});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')

// Setting the configuration for
// the request

function fetchData(response) {
	// set response header
	response.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const options = {
		hostname: 'jsonplaceholder.typicode.com',
		path: '/users',
		method: 'GET'
	};

	// Sending the request

	http.request(options, (res) => {
			let data = ''

			res.on('data', (chunk) => {
				data += chunk;
				console.log(chunk + '')
			});

			// Ending the response 
			res.on('end', () => {
				// console.log('Body:', JSON.parse(data))
				response.write(data);
			});

		})
		.on("error", (err) => {
			console.log("Error: ", err)
		})
		.end()

}