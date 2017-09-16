function noisy(f) {
	return function(arg) {
		var val = f(arg);
		return val;
	};
}

noisy(Boolean)(0);