function findSolution(target) {
	function searchPath(current, history) {
		if(current == target)
			return history;
		else if(current > target)
			return null;
		else
			return searchPath(current + 5, "\("+ history + " + 5\)") ||
				   searchPath(current * 3, "\("+ history + " * 3\)");
	}
	return searchPath(1,"1");
}

console.log(findSolution(13));