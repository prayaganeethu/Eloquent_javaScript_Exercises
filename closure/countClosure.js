var add = (function() {
	var counter = 0;
	return function() {return counter += 1;}
})();

add();
add();
console.log(add());

/*Gives output 3. Counter can be modified only using add(), and it will increment to 3 after 3 calls, 
unlike using counter as just as a local variable instead of as a closure*/