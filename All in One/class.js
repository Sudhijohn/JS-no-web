class Rectangle {

	constructor(height, width) {
		this.name = 'Rectangle';
		this.height = height;
		this.width = width;
	}

	print() {
		console.log(`Height is ${this.height} and width is ${this.width}`);
	}
}

class Square extends Rectangle {
	constructor(height) {
		super(height, height);
		this.name = 'Square';
	}
}

const square = new Square(30, 30);
square.print();