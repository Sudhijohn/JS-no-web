const employeeData = [
	{
		id: 1,
		name: "Sudhi"
  },
	{
		id: 2,
		name: "Sunil"
  },
	{
		id: 3,
		name: "Anish"
  },
	{
		id: 4,
		name: "Amith"
  },
	{
		id: 5,
		name: "Prashantha"
  }
];

for (const {
		id,
		name
	}
	of employeeData) {
	// const {
	//  id,
	//  name
	// } = employee;
	console.log({
		id,
		name
	})
}