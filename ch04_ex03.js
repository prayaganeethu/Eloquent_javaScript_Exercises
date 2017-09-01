function arrayToList(arr) {
	let list = null;
	for(let i = arr.length - 1;i >= 0;i--) {
		list = {value: arr[i], rest: list};
	}
	return list;
}

function listToArray(list) {
	let arr = [];
	for(var i = list; i ; i = i.rest) {
		arr.push(i.value);
	}
	return arr;
}

function prepend(element, list) {
	list = {value: element, rest: list};
	return list;
}

function nth(list, number) {
if(!list) {
	return undefined;
} else if (number === 0) {
	return list.value;
} else {
	return nth(list.rest, number - 1);
}
}

console.log(arrayToList([1,2,3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(1, prepend(2, null)));
console.log(nth(arrayToList([1, 2, 3]), 1));
