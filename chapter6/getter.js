let geekSkool = {
  names: ['Neethu', 'Donna', 'Isha', 'Soumya'],
  get newMember () {
    if (this.names.length === 0) return undefined
    return this.names[this.names.length - 1]
  }
}

delete geekSkool.newMember

console.log(geekSkool.newMember)
