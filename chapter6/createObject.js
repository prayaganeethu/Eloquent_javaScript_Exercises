let protoRabbit = {speak: function (line) { console.log('The', this.type, 'rabbit says', line) }}

let rabbit = Object.create(protoRabbit)
rabbit.type = 'awesome'
rabbit.speak('Hey')

console.log(Object.getPrototypeOf(rabbit) === protoRabbit)
