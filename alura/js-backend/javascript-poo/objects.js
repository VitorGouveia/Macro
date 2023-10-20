const user = {
  init: function(name, email) {
    this.name = name
    this.email = email
  },
  serialize: function() {
    return JSON.stringify(this)
  }
}

const newUser = Object.create(user)
newUser.init("vitor", "vitor@gmail.com")
console.log(newUser.serialize())