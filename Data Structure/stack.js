/*Implementation - 1 
function Stack() {
	this.count = 0;
	this.storage = {};

	this.push = function (value) {
		if (!value) throw new Error('Value expected');
		this.storage[this.count] = value;
		this.count++;
	}

	this.pop = function () {
		if (this.count === 0) {
			return this.storage[this.count];
		}
		this.count--;
		const result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	this.size = function () {
		console.log(this.storage)
		return this.count;
	}
}

/*Implementation - 2 */

function Stack() {
	this.count = 0;
	this.storage = {};
}

Stack.prototype.push = function (value) {
	if (!value) throw new Error('Value can not be set as Empty');
	this.storage[this.count] = value;
	this.count++;
}

Stack.prototype.pop = function () {
	if (this.count === 0) return;
	this.count--;
	const popResult = this.storage[this.count];
	delete this.storage[this.count];
	return popResult;
}

Stack.prototype.size = function size() {
	console.log({
		Count: this.count,
		storage: this.storage
	});
	return this.count;
}

/*End of implemenation 2*/
const stack1 = new Stack();
stack1.push('Sudhi')

stack1.push('Sudhi')
stack1.push('Sudhi')
stack1.push('Sudhi')
stack1.push('Sudhi')
console.log(stack1.size());
stack1.pop()
stack1.pop()

console.log(stack1.size());