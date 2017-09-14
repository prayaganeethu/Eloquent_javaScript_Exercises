function range(start,end) {
	var rangeArry = [];
	for(var i = start; i <= end; i++) {
		rangeArry.push(i);
	}
	return rangeArry;
}

function sum(arry) {
	var sum = 0;
	for(var i = 0; i < arry.length; i++)
		sum += arry[i];
	return sum;
}

console.log(sum(range(1,10)));