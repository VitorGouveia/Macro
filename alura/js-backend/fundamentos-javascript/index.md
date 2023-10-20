# Javascript: Tipos, Variáveis e Funções

## Variáveis

- var
  > Tipo  mais antigo de variável em javascript, possui contexto global, ou seja, qualquer variável declarada com "var" pode ser acessada de qualquer lugar, independente de escopo. Pode ser alterada a qualquer momento.

- let
  > Tipo um pouco mais moderno de variável, pode ser editada e acessada porém apenas no escopo onde a variável foi acessada.

- const
  > Tipo também moderno, não pode ser alterada e só pode ser acessada no escopo em que foi declarada.

## Tipos de Dados
Existem 5 tipos de dados em javascript.

- Number
  > Pode expressar qualquer número seja ponto flutuante ou não.
- Boolean
  > Pode expressar apenas "true" ou "false".
- String
  > Pode expressar qualquer string de texto.
- Null
  > Ausência de valor de uma variável.
- Undefined
  > Valor de variável não definida.

### Constructors

Existem funções reponsáveis por transformar alguns tipos de dados em outros.

- `Number()`, transforma qualquer string de texto em número.
- `String()`, pode ser utilizada para transformar números ou booleanos em strings.
- `Boolean()`, pode transformar valores *truthy* em boolean.

Para mais, veja a documentação da MDN sobre [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number#return_value), [String()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) e [Boolean()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

## Node.js
É um runtime de javascript, ou seja, uma plataforma que executa código javascript que funciona fora do navegador, ou seja, ele conversa diretamente com o sistema operacional.

O Node.js trás consigo algumas APIs que não existem no navegador, por ter esse acesso extra com o sistema operacional diretamente.

Essas APIs se comunicam com o sistema de arquivos do sistema, conseguem informações sobre processos, criar servidores http e mais.

## Operadores

Os operadores são utilizados para fazer conta ou utilizar de funções especiais do javascript, como a concatenação de texto.

Os operadores são:

- "+", para somar textos ou Numbers
  ```js
  const firstName = "Rodrigo"
  const lastName = "Silva"
  const fullName = firstName + lastName // RodrigoSilva
  const fullName2 = firstName + " " + lastName // Rodrigo Silva
  ```
- "-"
- "*"
- "/"
- "%", pega o resto da divisão de uma conta.

## Funções

```js
(() => {})(); // IIFE - Imediately Invoked Function Expression
var test = function() {} // Anonymous function
var test = function getTest() {} // Named function
const test = () => {} // arrow function
function test() {} // common function
```

## Operadores de comparação

=== é utilizado para comparar o valor e o tipo, enquanto == é utilizado para comparar apenas o valor.

## Argumentos vs Parâmetros

Parâmetros são todas as informações passadas para uma função.
Argumentos são todos os valores recebidos pela função.

```js
const sum = (a, b) => {
  // 'a' and 'b' are arguments
}

sum(1, 2) // these are parameters
```