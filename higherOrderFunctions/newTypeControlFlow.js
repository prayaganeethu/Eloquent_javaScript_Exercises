repeat(5, function(n) {
	unless(n % 2, function() { console.log(n, "is even");})
});

function unless(test, then) {
	if(!test) then();
}

function repeat(m, body) {
	for(var i = 0; i < m; i++) {
		body(i);
	}
}