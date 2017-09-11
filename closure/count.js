var counter = 0;


function add() {
	counter += 1;
}


add();
add();
add();

console.log(counter);
//--> 3
//But any script on the page can change the counter variable, not only the add function
//Closure needed!
