let rabbit = Object.create(null)
rabbit.type = 'furry'
rabbit.teeth = 'white'

console.log(Object.getOwnPropertyNames(rabbit))

/* no longer need the hasOwnProperty kludge because all the properties the object has are its own properties. Now we can safely use for/in loops,
 no matter what people have been doing to Object.prototype */
