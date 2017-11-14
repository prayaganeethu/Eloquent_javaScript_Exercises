let geekSkool = {
  names: [],
  get showMembers () {
    return this.names
  }
}

let expr = 'addMember'

Object.defineProperty(geekSkool, [expr], {set: function (name) { this.names.push(name) }})

// delete geekSkool.addMember

geekSkool.addMember = 'Neethu'

console.log(geekSkool.names)
