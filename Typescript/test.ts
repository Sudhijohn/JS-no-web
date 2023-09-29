

function add(a:number,b:number){
	return a+b;
}

console.log(add(2,34));

type Person<T> = {
	name: string;
	DOB: T
}

const person1:Person<number> = {
	name:'Alex',
	DOB: 37
};

const person2:Person<string>={
	name:'Sudhi',
	DOB:'01-May-1986'
}

console.log({person1,person2})

type inputType = Array<number|string>;
type inputType1 = (number|string) [];

function sortArray(input:inputType):number[]{
	return [...new Set(input.map(number=>Number(number)).sort().reverse())];
}

console.log(sortArray([6,1,'2',4,9]));

type ObjectWithNameArray = Array<{ name: string }>;


const names:ObjectWithNameArray = [{name:'Sudhi'}];
console.log(names);

