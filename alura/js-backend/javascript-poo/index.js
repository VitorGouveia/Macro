const user = {
  name: "vitor",
  email: "vitor@gmail.com",
  birthDate: "2005/03/11",
  role: "studend",
  active: true,
  showInfo() {
    console.log(JSON.stringify(this))
  }
}

const admin = {
  name: "system",
  email: "system@admin.com",
  role: "admin",
  createCourse() {
    console.log("creating course!")
  }
}

Object.setPrototypeOf(admin, user)

admin.createCourse()
admin.showInfo()