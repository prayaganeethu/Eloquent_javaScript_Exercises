let geekSkool = {
  names: ['Neethu', 'Donna', 'Isha', 'Soumya']
}

let expr = 'newMember'
Object.defineProperty(geekSkool, [expr], { get: function () {
  if (this.names.length === 0) return undefined
  return this.names[this.names.length - 1]
}})

// delete geekSkool.newMember

console.log(geekSkool.newMember)
