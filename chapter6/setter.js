let geekSkool = {
  names: [],
  get showMembers () {
    return this.names
  }
}

Object.defineProperty(geekSkool, 'addMember', {set: function (name) { this.names.push(name) }})

// delete geekSkool.addMember

geekSkool.addMember = 'Neethu'

console.log(geekSkool.names)
