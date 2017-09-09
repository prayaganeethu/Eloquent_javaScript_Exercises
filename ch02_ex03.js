for(var i = 0; i < 8; i++) {
	if(i%2===0)
		hashChess = " ";
	else
		hashChess = "#"
	for(var j = 0; j < 8; j++) {
		if((i+j)%2===0)
			hashChess += "#";
		else 
			hashChess += " ";
	}
	console.log(hashChess+"\n");
}