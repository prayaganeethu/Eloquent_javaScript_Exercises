for(var i = 0; i < 7; i++)
	console.log(hashLine(i));

function hashLine(i) {
	var hash = "";
	for(var j = 0;j < i; j++) {
		hash += "#"
	}
	return hash;
}