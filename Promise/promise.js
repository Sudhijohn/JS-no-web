'use strict';

function wait(seconds) {
	return new Promise(resolve => {
		setTimeout(resolve, seconds * 1000);
	})
}

wait(2)
	.then(() => {
		console.log(`Waited for 2 seconds`);
		return wait(1);
	})
	.then(() => {
		console.log(`Waited for 1 sec`);
	});


const abc = async() => {
	return await setTimeout(() => {
		console.log('Waited..')
	}, 5000);
}