function ProtoRab (type) {
  this.type = type
}

ProtoRab.prototype.speak = function (line) {
  console.log('The', this.type, 'rabbit says', line)
}

let rabbit = new ProtoRab('furry')

Object.defineProperty(ProtoRab, 'teeth', {enumerable: false, value: 'white'})

Object.defineProperty(ProtoRab, 'whiskers', {enumerable: true, value: 'long'})

for (let name in ProtoRab) console.log(name)

console.log(Object.getOwnPropertyNames(ProtoRab))

rabbit.speak('nom nom')
rabbit.teeth = 'white'
console.log(rabbit.hasOwnProperty('teeth'))
