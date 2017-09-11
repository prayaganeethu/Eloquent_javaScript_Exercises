function power(base, exponent) {
	if(exponent === undefined)
		exponent = 2;
	var result = 1;
	for(var i = 0; i < exponent; i++)
		result *= base;
	return result;
}

console.log(power(4, 2));
console.log(power(4));