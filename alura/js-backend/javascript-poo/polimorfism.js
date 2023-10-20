class Entity {
  #id
  
  constructor(id) {
    this.#id = id
  }

  serialize() {
    return JSON.stringify({
      id: this.#id
    })
  }
}

class User extends Entity {
  #id
  #name
  
  constructor(id, name) {
    super(id)
    this.#id = id
    this.#name = name
  }

  serialize() {
    return JSON.stringify({
      id: this.#id,
      name: this.#name,
    })
  }
}

const user = new User("123", "vitor")

console.log(user.serialize()) // polimorfism overriding serialize method from "Entity"