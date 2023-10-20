# Criando sua primeira biblioteca com Node.js

## Problema
Imagina um blog, que possui diversos links apontando para outros sites internos ou externos. Imagine também que um desses links pode sair do ar, seja porque foi movido de lugar ou apagado, isso prejudica o cliente final lendo aquele blog e o ranqueamento daquele site no Google.

## Solução
Então deve-se criar uma biblioteca que lê arquivos em markdown e testa todos os links desse arquivo.

## Callback vs Promise vs Async/Await
São três formas de lidar com tarefas no javascript.

### Callback

Callback é uma forma deprecada de se lidar com tarefas no javascript

- Código muito verboso e de difícil compreensão.
- Poluição de escopo

```js
GetUser((err, user) => {
  GetProfile(user, (err, profile) => {
    GetAccount(profile, (err, acc) => {
      GetReport(acc, (err, report) => {
        SendStatistics(report, (err) => {
          console.log("Done!")
        })
      })
    })
  })
})
```

### Promise

Uma forma mais recente de se lidar com tarefas assíncronas, ainda faz uso de callbacks em parte porém consegue deixa o código mais legível.

- Maior legibilidade
- Código muito abstraído e difícil acompanhar quais parâmetros são passados para quais funções

```js
GetUser()
  .then(GetProfile)
  .then(GetAccount)
  .then(GetReport)
  .then(SendStatistics)
  .then(() => console.log("Done!"))
  .catch(err => {})
```

### Async/Await

A forma mais moderna de se lidar com tarefas e trabalho assíncrono.

```js
const user = await GetUser()
const profile = await GetProfile(user)
const account = await GetAccount(profile)
const report = await GetReport(account)
const send = await SendStatistics(report)

console.log("Done!")
```

## Regex
Expressões regulares são utilizadas para encontrar padrões em textos. É uma linguagem própria para isso.

Nesse caso vou utilizar para identificar o seguinte padrão `[<qualquer texto>](<qualquer texto>)`, pois é assim que os links em markdown são definidos.

O Regex utilizado para identificar todos os links é:
`/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/g`

> Nem um pouco humano

## CLI
Foi criado uma CLI para lidar com arquivos dinâmicos.