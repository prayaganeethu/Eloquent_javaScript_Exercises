function speak (line) {
  console.log('The', this.type, 'rabbit says', line)
}

let scaryRabbit = {type: 'scary', speak: speak}
let cuteRabbit = {type: 'furry and white', speak: speak}

scaryRabbit.speak('Boo')
cuteRabbit.speak('Nom nom nom')

speak.apply(scaryRabbit, ['Gonna scare ya'])
speak.call(scaryRabbit, 'Bazingaaaa')
