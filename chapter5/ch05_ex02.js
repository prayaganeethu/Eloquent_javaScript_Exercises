const ANCESTRY_FILE = require('./ancestryFile')

let ancestry = JSON.parse(ANCESTRY_FILE)

function average (array) {
  function plus (a, b) { return a + b }
  return array.reduce(plus) / array.length
}

var byName = {}
ancestry.forEach(function (person) {
  byName[person.name] = person
})

console.log(average(ancestry.map((ancestor, index, ancestry) => { if (ancestor.mother) if (byName[ancestor.mother] !== undefined) return ancestor.born - byName[ancestor.mother].born }).filter((ageDiff) => { if (ageDiff !== undefined) return ageDiff })))

// → 31.2
