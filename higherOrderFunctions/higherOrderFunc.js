function greaterThan(n) {
	return function(m) { return m > n; };
}

var greaterThanN = greaterThan(10);
console.log(greaterThanN(11));