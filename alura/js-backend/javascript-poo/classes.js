"use strict";

const User = class {
  constructor(name, email, role, active = true) {
    this.name = name
    this.email = email
    this.role = role || "student"
    this.active = active
  }

  serialize() {
    return JSON.stringify(this)  
  }
}

const user = new User("vitor", "vitor@gmail.com", "admin", true)
console.log(user.serialize())

class Admin extends User {
  constructor(name, email, role = "admin", active = true) {
    super(name, email, role, active)
  }

  createCourse() {
    console.log("course created!")
  }
}

const admin = new Admin("system", "system@gmail.com")
console.log(admin.serialize())
admin.createCourse()

class Docente extends User {
  constructor(name, email, role = "docente", active = true) {
    super(name, email, role, active)
  }

  approveStudent(student, course) {
    return `student ${student.name} approved on course ${course}`
  }
}

const docente = new Docente("system", "system@gmail.com")
console.log(docente.approveStudent(user, "JS Foundations"))