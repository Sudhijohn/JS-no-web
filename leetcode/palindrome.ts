
function isPalindrome(input:string|number):boolean{
	const inputArr = typeof input ==='number' ? input+'' :input.toLowerCase().split('');
	const len = inputArr.length;
	for(let i=0;i<len/2;i++){
		if(inputArr[i] !== inputArr[len-1-i]){
			return false;
		}
	}
	return true
}

console.log(isPalindrome('tests'));
console.log(isPalindrome('mom'));
console.log(isPalindrome('malayalaM'));
console.log(isPalindrome('malayalama'));
// console.log(isStringPalindrome('Sit on a potato pan Otis'));

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(12321)); // true


