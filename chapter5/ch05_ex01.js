var arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.reduce((flat, array) => { return flat.concat(array) }, []))
// → [1, 2, 3, 4, 5, 6]
