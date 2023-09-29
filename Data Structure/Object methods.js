const {
	log
} = console;

const map = new Map([
  ['a', 1],
  ['b', 2],
]);
const obj = Object.fromEntries(map);

log('Map',
	map);
log('Map converted Object', obj)

const target = {
	a: 1,
	b: 2
};
const source = {
	b: 4,
	c: 5
};

const newObj = {...target,
	...source
}

// log(newObj)

const newObj1 = Object.assign(target, source);

// log(newObj1)

const {
	entries,
	fromEntries
} = Object;

// log(entries(newObj));
// log(fromEntries(entries(newObj)));
// log(new Map(entries(newObj)));