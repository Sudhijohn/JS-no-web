'use strict';

function add() {
	console.log(this);

	const arrow = () => console.log(this);

	arrow();
}

add();

const arrow = () => console.log(this);

arrow();