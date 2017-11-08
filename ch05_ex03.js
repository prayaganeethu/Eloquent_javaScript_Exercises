const ANCESTRY_FILE = require('./ancestryFile')

let ancestry = JSON.parse(ANCESTRY_FILE)

function average (array) {
  function plus (a, b) { return a + b }
  return array.reduce(plus) / array.length
}

let centObj = {}

ancestry.forEach(function (person) {
  let century = Math.ceil(person.died / 100)
  if (!(century in centObj)) centObj[century] = []
  centObj[century].push(person.died - person.born)
})

for (let key in centObj) {
  console.log(key, ':', average(centObj[key]).toFixed(1))
}
