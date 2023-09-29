const sumStrings = (str1, str2) => {
	console.log(BigInt(Number(str1)))
	return BigInt(Number(str1)) + BigInt(Number(str2)) + '';
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))