function power(base, exponent) {
	if(exponent == 0)
		return 1;
	else
		return base * power(base, exponent-1);
}

console.log(power(4,2));
console.log(power(4));

//Although recursive function looks better, it is almost 10 times slower than the one with loops, in JavaScript