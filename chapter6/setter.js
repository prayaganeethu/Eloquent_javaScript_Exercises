let geekSkool = {
  names: [],
  get showMembers () {
    return this.names
  },
  set addMember (name) {
    this.names.push(name)
  }
}

delete geekSkool.addMember

geekSkool.addMember = 'Neethu'

console.log(geekSkool.names)
