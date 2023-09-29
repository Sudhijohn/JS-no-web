function add(a) {
	console.log(this.a + a);
}

const obj = {
	a: 10
};

add.call(obj, 10);

const partialAdd = add.bind(obj);

partialAdd(5);

function testArgs(args) {
	console.log({...this
	});
}

const tests = testArgs.bind({
	name: 'Sudhi'
});

tests();