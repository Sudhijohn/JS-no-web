for (var i = 0; i < 5; i++) {
	(function (i) {
		setTimeout(() => {
			console.log(i);
		}, 1000);
	})(i)
}

x = BigInt(String(53542885039854749852));

console.log(x.toString());