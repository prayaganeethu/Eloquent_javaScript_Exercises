function range(start,end) {
	var rangeArry = [];
	for(var i = start; i <= end; i++) {
		rangeArry.push(i);
	}
	return rangeArry;
}

console.log(range(1,10));