class User {
  #name

  constructor(name) {
    this.#name = name
  }

  #formatUser() { // cannot be accessed outside class
    return {
      name: this.#name
    }
  }

  serialize() {
    return JSON.stringify(this.#formatUser())  
  }
}

const user = new User("vitor")

console.log(user.name) // is undefined
console.log(user.serialize())