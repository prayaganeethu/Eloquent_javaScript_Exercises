// function countChar(stringInput, char) {
// 	var count = 0;
// 	for(var i = 0; i < stringInput.length; i++) {
// 		if(stringInput[i] == char)
// 			count++;
// 	}
// 	return count;
// }
//
// console.log(countChar("BBC","B"));
// → 2
//charAt() not working

function countBs(str) {
  return str.split('').filter((letter) => { return letter === 'B' }).length
}

function countChar(str, char) {
  return str.split('').filter((letter) => { return letter === char }).length
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
