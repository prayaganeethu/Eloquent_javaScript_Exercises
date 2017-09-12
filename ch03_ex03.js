function countBs(stringInput) {
	var count = 0;
	for(var i = 0; i < stringInput.length; i++) {
		if(stringInput[i] == "B")
			count++;
	}
	return count;
}

console.log(countBs("BBC"));
// → 2
//charAt() not working