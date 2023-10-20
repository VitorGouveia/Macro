# Javascript: Objetos

## O que são objetos e como alterar seus campos

Objetos são uma estrutura de dados composto de pares de chave e valor.

```json
{
  "nome": "vitor",
  "idade": 18,
} // <- um objeto
```

Os objetos facilitam o acesso a dados estruturados dentro de javascript.

## Propriedades de objetos

Para acessar o valor de uma chave do objeto basta utilizar o operador "." ou os colchetes.

```js
const user = {
  name: "vitor"
}

console.log(user.name)
console.log(user["name"])
```

As chaves de um objeto só podem ser do tipo String. Mais em [tipos de dados](../fundamentos-javascript/index.md#tipos-de-dados).
Porém, os valores de um objeto, podem ter qualquer valor. Até outros objetos.

```json
{
  "name": {
    "firstName": "",
    "lastName": "",
  }
}
```

### Funções

É possível escrever tanto funções normais quanto anônimas como arrow no javascript.

```js
const user = {
  balance: 200,
  pay: (value) => {
  },
  removeFromBalance: function(value) {
    this.balance -= value
  },
}
```

## For...in
Para fazer um loop por cima de todas as chaves de um objeto é possível utilizar o for...in

```js
const user = {
  name: "vitor",
  age: 18,
}

for (const key in user) {
  console.log(key, user[key]) // [["name", "vitor"], ["age", 18]]
}
```

## Métodos de Objeto

Existe um objeto global chamado "Object" que contém funções para lidar com objetos.

```js
const user = {
  name: "vitor",
  age: 18,
}

Object.keys(obj) // ["name", "age"]
Object.values(obj) // ["vitor", 18]
Object.entries(obj) // [["name", "vitor"], ["age", 18]]
```

## Formato JSON

É um formato de dados para lidar com pares de chave-valor.

É muito utilizado para transportar dados de objetos javascript.

Porém ele não tem a mesma sintaxe dos objetos.

- Apenas tipos primitivos são permitidos como valores
- Chaves tem que ter aspas