function reverseArray(arr) {
	let newArr = [];

	for(let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

function reverseArrayInPlace(arr) {

	for(let i = 0 ; i <= Math.floor(arr.length/2) ; i++) {

		let currVal = arr[i];

		arr[i] = arr[arr.length - 1 - i];

		arr[arr.length - 1 - i] = currVal;
 	}
 	return arr;
}
console.log(reverseArray([1,2,3]));

console.log(reverseArrayInPlace([1,2,3]));