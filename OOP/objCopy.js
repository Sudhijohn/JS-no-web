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

  function clone(obj) {
  	if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
  		return obj;
  	let temp;
  	if (obj instanceof Date)
  		temp = new obj.constructor(); //or new Date(obj);
  	else
  		temp = obj.constructor();

  	for (const key in obj) {
  		if (Object.prototype.hasOwnProperty.call(obj, key)) {
  			obj['isActiveClone'] = null;
  			temp[key] = clone(obj[key]);
  			delete obj['isActiveClone'];
  		}
  	}
  	return temp;
  }