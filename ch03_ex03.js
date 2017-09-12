function countChar(stringInput, char) {
	var count = 0;
	for(var i = 0; i < stringInput.length; i++) {
		if(stringInput[i] == char)
			count++;
	}
	return count;
}

console.log(countChar("BBC","B"));
// → 2
//charAt() not working