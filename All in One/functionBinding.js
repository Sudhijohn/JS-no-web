const Person = function () {
	this.name = 'Sudhi';
	this.printName = function () {
		console.log('From First', this.name);

		function second() {
			console.log('From Second', this.name);
		}
		const runSecond = second.bind(this);
		runSecond();
	};

}

const sudhi = new Person();
sudhi.printName();

console.log(sudhi instanceof Person);