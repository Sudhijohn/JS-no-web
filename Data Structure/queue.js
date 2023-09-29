/*
enqueue: Enter queue, add an element at the end.
dequeue: Leave queue, remove the front element and return it.
front: Get the first element.
isEmpty: Determine whether the queue is empty.
size: Get the number of element(s) in queue.
print: Print the queue
*/

/*Implementation - 1*/

function Queue() {
	this.queue = [];
}

Queue.prototype.enqueue = function (element) {
	this.queue.push(element);
}

Queue.prototype.dequeue = function () {
	this.queue.shift();
}

Queue.prototype.front = function () {
	return this.queue[0]
}

Queue.prototype.isEmpty = function () {
	return this.queue.length === 0;
}

Queue.prototype.size = function () {
	return this.queue.length;
}

Queue.prototype.print = function () {
	console.log({
		Queue: this.queue,
		Size: this.queue.length,
		isEmpty: this.queue.length === 0
	});
	return this.queue;
}

const queue1 = new Queue();

queue1.enqueue('Sudhi');
queue1.enqueue('Rintu');
queue1.dequeue();
queue1.dequeue();
queue1.print();


// const months = ["Jan", "Mar", "Apr", "May"];
// const months2 = months.toSpliced(1, 0, "Feb");
// const months3 = months2.toSpliced(2, 2);
// console.log({
// 		months2,
// 		months3
// 	})
// 	// console.log(months3); // ["Jan", "Feb", "May"]