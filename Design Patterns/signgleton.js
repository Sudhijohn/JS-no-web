let mySingleton = (function () {
	let instance;

	function init() {
		return {
			someMethod: function () {
				console.log('This is a singleton method');
			}
		};
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = init();
			}

			return instance;
		}
	};
})();

let singleton1 = mySingleton.getInstance();
let singleton2 = mySingleton.getInstance();

console.log(singleton1 === singleton2); // outputs true