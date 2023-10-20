function User(name, email) {
  this.name = name
  this.email = email

  this.serialize = function() {
    return JSON.stringify(this)
  }
}

const user = new User("vitor", "vitor@gmail.com")

console.log("USER", user.serialize())


function Admin(role) {
  User.apply(this, ["vitor", "vitor@gmail.com"])
  this.role = role || "student"
}

Admin.prototype = Object.create(User.prototype)

const admin = new Admin("admin")

console.log("ADMIN", admin.serialize())