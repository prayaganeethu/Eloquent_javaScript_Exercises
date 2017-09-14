function findMax() {
	var max = 0;
	for(var i = 0; i < arguments.length; i++) {
		if(max < arguments[i]) 
			max = arguments[i];
	}
	return max
}

console.log(findMax(1,2,31,3,100));