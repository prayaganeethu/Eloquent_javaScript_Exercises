function deepEqual (valA, valB) {
  if (valA === null && valB === null) return true
  if (typeof valA !== typeof valB) return false
  else {
    if (typeof valA !== 'object') return (valA === valB)
    else {
      if (Object.keys(valA).length !== Object.keys(valB).length) return false
      for (let key in valA) {
        if (!(key in valB)) return false
        let flag = deepEqual(valA[key], valB[key])
        if (flag === false) return false
      }
      return true
    }
  }
}

let obj = {here: {is: 'an'}, object: 2}
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, {here: 1, object: 2}))
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}))
// → true
