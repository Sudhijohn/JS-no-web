const capital = fetch(`https://restcountries.com/v2/capital/delhi`)
	.then(res => res.json())
	.then(data => console.log(data));

const capital = await fetch(`https://restcountries.com/v2/capital/delhi`)
const res = await capital.json();

const where = async function () {
	const capital = await fetch(`https://restcountries.com/v2/capital/delhi`)
	const res = await capital.json();
	console.log(res);
}
console.log(where());