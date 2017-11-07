function deepEqual (valA, valB) {
  if (valA === null && valB === null) return true
  if (typeof valA !== typeof valB) return false
  else {
    if (typeof valA !== 'object') return (valA === valB)
    else {
      for (let key in valA) {
        let flag = deepEqual(valA[key], valB[key])
        if (flag === false) return false
      }
    }
    return true
  }
}

let obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, {here: 1, object: 2}))
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}))
// → true
