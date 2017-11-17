function arrayToList (arr, obj) {
  if (obj === undefined) obj = {}
  if (arr.length === 1) {
    obj.value = arr[0]
    obj.rest = null
    return obj
  }
  obj.value = arr[0]
  obj.rest = arrayToList(arr.slice(1), {})
  return obj
}

function listToArray (obj, arr) {
  if (arr === undefined) arr = []
  if (obj.rest === null) {
    arr.push(obj.value)
    return arr
  }
  arr.push(obj.value)
  arr = listToArray(obj.rest, arr)
  return arr
}

function prepend (element, obj) {
  let list = {}
  list.value = element
  list.rest = obj
  return list
}

function nth (list, index) {
  if (!list) return undefined
  if (index === 0) return list.value
  return nth(list.rest, index - 1)
}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20
