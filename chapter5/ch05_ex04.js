function every (array, func) {
  for (let i of array) if (func(i) === false) return false
  return true
}

function some (array, func) {
  for (let i of array) if (func(i) === true) return true
  return false
}

console.log(every([NaN, NaN, NaN], isNaN))
// -> true
console.log(every([NaN, NaN, 4], isNaN))
// → false
console.log(some([NaN, 3, 4], isNaN))
// → true
console.log(some([2, 3, 4], isNaN))
// → false
