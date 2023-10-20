# Javascript: Arrays

## Arrays
Array é uma estrutura de dados que guarda valores em uma lista.

## Métodos de Arrays

- push()
  > Colocar um item no fim do array.
- pop()
  > Remove o último item do array.
- unshift()
  > Remove o primeiro item do array.
- slice()
  > Pega uma cópia de um array e coloca em um novo array.
- splice()
  > Remove ou adicionar um ou mais items em um array.
- concat()
  > Adiciona o conteúdo de um array em outro. Retorna um novo array.
- reduce()
  > Trasnforma todos os itens do array em um retorno só.

## Loops

```js
const array = [10, 6.5, 8];

// forEach()
array.forEach(item => {})

// map()
array.map(item => {})

// FOR (NEW)
for(const item of array) {}

// FOR (OLD)
for(let i = 0; i < array.length; i++) {}


// WHILE
let i

while(i < array.length) {
  i++
}


// DO-WHILE
let i

do(i++) {
} while(i < array.length);
```

## Funções callback

São funções passadas como parâmetros de métodos de objetos do tipo Array.

Exemplo:

```js
function loopItems(item) {}

[].forEach(loopItems) // <- essa função é armazenada dentro do escopo do 'forEach' e chamado a cada item.
```