  const expenses = [
  	{
  		id: "e1",
  		title: "Car Insuranace",
  		amount: 6000,
  		date: new Date(2021, 10, 22),
    },
  	{
  		id: "e2",
  		title: "Car Maintenance",
  		amount: 6000,
  		date: new Date(2021, 10, 22),
    },
  	{
  		id: "e3",
  		title: "Petrol",
  		amount: 10000,
  		date: new Date(2021, 10, 22)
  	},
  	{
  		id: "e4",
  		title: "Toll",
  		amount: 6000,
  		date: new Date(2021, 10, 22)
  	},
  ];

  const newExpenses = [...expenses
  ];

  // const newExpenses = structuredClone(expenses);

  newExpenses[3].date = new Date();

  console.log('Old Expenses', expenses[3]);
  console.log('New Expenses', newExpenses[3]);