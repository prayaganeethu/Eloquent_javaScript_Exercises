function ArraySeq (array) {
  this.array = array
}

ArraySeq.prototype.length = function () {
  let length = 0
  let array = this.array
  while (array[0] !== undefined) {
    length++
    array = array.slice(1)
  }
  return length
}

ArraySeq.prototype.element = function (pos) {
  return this.array[pos]
}

function logFive (seq) {
  for (let i = 0; i < 5 && i < seq.length(); i++) console.log(seq.element(i))
}

function RangeSeq (from, to) {
  let array = []
  for (let i = from; i <= to; i++) array.push(i)
  this.array = array
}

RangeSeq.prototype.length = function () {
  let length = 0
  let array = this.array
  while (array[0] !== null && array[0] !== undefined) {
    length++
    array = array.slice(1)
  }
  return length
}

RangeSeq.prototype.element = function (pos) {
  return this.array[pos]
}

logFive(new ArraySeq([1, 2]))

logFive(new RangeSeq(100, 1000))
