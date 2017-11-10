function Rabbit (type) {
  this.type = type
}

let killerRabbit = new Rabbit('Killer')

console.log(killerRabbit.type)

Rabbit.prototype.speak = function (line) {
  console.log('The', this.type, 'rabbit says', line)
}

killerRabbit.speak('Boo hoo')
