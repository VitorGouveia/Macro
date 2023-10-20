# Javascript I: Algoritmos de Ordenação

Algoritmos são uma lista de passos que executam uma solução para determinado problema.

## Complexidade

É necessário medir a performance dos algoritmos para saber quais algoritmos utilizar em diferentes casos.

Essa performance pode ser medida pela quantidade de operações de leitura e escrita executadas até a conclusão do algoritmo.

N = número de items em um array

### Selection Sort

Para calcular a complexidade do selection sort temos que levar em consideração todas as operações que esse algortimo executa

```js
function selectionSort(inputArr) { 
  let n = inputArr.length;
      
  for(let i = 0; i < n; i++) { // esse é um N pois percorre todos os itens do array
    let min = i;

    for(let j = i+1; j < n; j++) { // esse é um N² pois percorre todos os itens do array para cada item que o loop maior percorre.
      if(inputArr[j] < inputArr[min]) {
        min=j; 
      }
    }

    if (min != i) { // pode ser executado ou não para cada elemento sendo analisado
      let tmp = inputArr[i]; 
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;      
    }
  }

  return inputArr;
}
```

Por conta do if e 2 for, a complexidade de tempo do *selection sort* é de n² no melhor caso e 2n² no pior caso (caso todos os elementos entrem no if).

Aqui abaixo está uma tabela de operações executadas para o melhor e pior caso.

| Elementos | Best Case | Worst Case |
| ----|--------|-----|
| 1 | 1 | 2 |
| 2 | 4 | 8 |
| 4 | 16 |32|
| 8 | 64 | 128 |
| 16 | 256 | 512 |
| 32 | 1024 | 2048 |
| 64 | 4096 | 8192 |
| 128 | 16384 | 32768|
| 256 | 65536 | 131072 |
| 512 | 262144 | 524288 |
| 1024 | 1048576 | 2097152 |
| 2048 | 4194304 | 8388608 |
| 4096 | 16777216 | 33554432 |

Então o selection sort tem um crescimento quadrático.

## Big O

Se chama de Big O a notação utilizada para dar a complexidade de tempo e espaço dos algoritmos.

## Algoritmos mais velozes

Baseado nesse [vídeo](https://www.youtube.com/watch?v=BeoCbJPuvSE) é possível ter uma visualização do funcionamento de 24 algoritmos, alguns estão repetidos porém com algumas leves alterações.

Destes todos é possível notar que o mais rápido é o Radix Sort LSD.