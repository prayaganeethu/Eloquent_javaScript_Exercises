function Vector (x, y) {
  this.x = x
  this.y = y
}

Object.defineProperty(Vector.prototype, 'length', {get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) }})

Vector.prototype.plus = function (secondVector) {
  return new Vector(this.x + secondVector.x, this.y + secondVector.y)
}

Vector.prototype.minus = function (secondVector) {
  return new Vector(this.x - secondVector.x, this.y - secondVector.y)
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length)
// → 5

// let newV = new Vector(3, 4)
// console.log(Math.sqrt(Math.pow(newV.x, 2) + Math.pow(newV.y, 2)))
