const TimeLimitedCache = function () {
	this.obj = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
	let returnValue = false;
	const strKey = this.convertKey(key);
	if (this.obj[strKey]) {
		clearTimeout(this.obj[strKey].timeoutId);
		returnValue = true;
	}
	const timeoutId = setTimeout(() => {
		console.log('msg')
		delete this.obj[strKey];
	}, duration);
	this.obj[strKey] = {
		value,
		timeoutId
	};
	return returnValue;
};

TimeLimitedCache.prototype.convertKey = function (key) {
	return key + '';
}

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
	const strKey = this.convertKey(key);
	return this.obj[strKey] ? this.obj[strKey].value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
	return Object.keys(this.obj)
		.length;
};

// const obj = new TimeLimitedCache();
// console.log(obj.set(1, 42, 50))
// console.log(obj.get(1))
// console.log(obj.count())
// console.log(obj.get(1))

const obj1 = new TimeLimitedCache();
console.log(obj1.set(1, 42, 50))
console.log(obj1.set(1, 50, 100))
console.log(obj1.get(1))
console.log(obj1.get(1))
console.log(obj1.get(1))
console.log(obj1.count())