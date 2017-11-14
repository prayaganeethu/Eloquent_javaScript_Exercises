let geekSkool = {
  names: [],
  get showMembers () {
    return this.names
  },
  set addMember (name) {
    this.names.push(name)
  }
}

geekSkool.addMember = 'Neethu'
console.log(geekSkool.names)
