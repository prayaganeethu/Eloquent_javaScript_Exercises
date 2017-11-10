function ProtoRabbit (type) {
  this.type = type
  this.teeth = 'White'
  this.speak = function (line) {
    console.log('The', this.type, 'rabbit with', this.teeth, 'teeth says', line)
  }
}

let rabbit = new ProtoRabbit('Serene')

rabbit.teeth = 'cute and white'

rabbit.speak('I am serene, always')

/* When you add a property to an object, whether it is present in the prototype or not,
 the property is added to the object itself, which will henceforth have it as its own
 property. If there is a property by the same name in the prototype, this property will
 no longer affect the object. The prototype itself is not changed. */
