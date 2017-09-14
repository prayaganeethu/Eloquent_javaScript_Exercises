function range(start,end,step) {
	var rangeArry = [];
	if(step == undefined)
		for(var i = start; i <= end; i++)
			rangeArry.push(i);
	else if(step >= 0)
		for(var i = start; i <= end; i += step)
			rangeArry.push(i);
	else
		for(var i = start; i >= end; i += step)
			rangeArry.push(i);
	return rangeArry;
}

function sum(arry) {
	var sum = 0;
	for(var i = 0; i < arry.length; i++)
		sum += arry[i];
	return sum;
}

console.log(range(10, 1 , -2));
console.log(sum(range(1,10,2)));