const RomanNumerals = {
	placeValues: ['ones', 'tens', 'hundreads', 'thousands', '5ones', '5tens', '5hundreads'],
	toRoman(num) {
		const [ones, tens, hundreads, thousands] = ('' + num)
		.split('')
			.reverse();
		if (thousands >= 4) return ``;
		return this.mapNumbersToRoman(thousands, 'thousands') +
			this.mapNumbersToRoman(hundreads, 'hundreads') +
			this.mapNumbersToRoman(tens, 'tens') +
			this.mapNumbersToRoman(ones, 'ones');
	},
	mapNumbersToRoman(digit, placeValue) {
		digit = Number(digit);
		if (!digit || !placeValue) return ``;
		if (digit > 0 && digit < 4) {
			return this.returnRoman(digit, placeValue);
		} else if (digit >= 4 && digit < 9) {
			return this.returnRoman(5 - digit, placeValue) +
				this.getPlaceValue(5 + placeValue, true) +
				this.returnRoman(digit - 5, placeValue);
		} else if (digit === 9) {
			const index = this.placeValues.indexOf(placeValue);
			const higherPlaceValue = this.placeValues[index + 1];
			return this.returnRoman(1, placeValue) +
				this.returnRoman(1, higherPlaceValue);

		} else {
			return ``;
		}

	},
	getPlaceValue(placeValue, roman) {
		switch (placeValue) {
		case 'ones':
			return roman ? 'I' : 1;
		case 'tens':
			return roman ? 'X' : 10;
		case 'hundreads':
			return roman ? 'C' : 100;
		case 'thousands':
			return roman ? 'M' : 1000;
		case '5ones':
			return roman ? 'V' : 5;
		case '5tens':
			return roman ? 'L' : 50;
		case '5hundreads':
			return roman ? 'D' : 500;
		}
	},
	returnRoman(digit, placeValue) {
		return Array.from({
				length: Number(digit)
			})
			.fill(this.getPlaceValue(placeValue, true))
			.join('')
	},
	fromRoman(str) {
		const numbers = str.split('')
			.map(letter => {
				return this.placeValues.filter(placeValue => this.getPlaceValue(placeValue, true) === letter)
			})
			.flat();
		return this.convertToNumber(numbers);
	},
	convertToNumber(roman) {
		const count = {};
		const numbers = roman.map(letters => this.getPlaceValue(letters));
		numbers.forEach((num, index, array) => {
			if (num < array[index + 1]) {
				const nextNum = array[index + 1];
				// const percentage = (nextNum / 10 === 0) ? 10 : 10;
				const percentage = ('' + nextNum)
					.indexOf('5') !== -1 ? 5 : 10;
				array[index] = (nextNum - (nextNum / percentage));
				array.splice(index + 1, 1);
			}
		})

		return numbers.reduce((a, b) => a + b, 0);

	}

};

// console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.fromRoman('MCMXC'));

// console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman('MMVIII'));
console.log(RomanNumerals.fromRoman('XL'));
//RomanNumerals.fromRoman(900);
// RomanNumerals.toRoman(44);