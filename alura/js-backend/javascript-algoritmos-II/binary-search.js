const search = (array, from, to, value) => { 
  const half = Math.floor((from + to) / 2)
  const current = array[half]

  console.log(`searching from ${from} to ${to}`)

  if(from > to) {
    return -1
  }

  if(value === current) {
    return half
  }

  if(value < current) {
    return search(array, 0, half - 1, value)
  }
  
  if(value > current) {
    return search(array, half + 1, to, value)
  }
}

const randomNumbers = () => [...new Set(new Array(5_000).fill(0).map(() => Math.floor(Math.random() * 1000)).sort((a, b) => a - b))]

let n = randomNumbers()

console.log(n)

console.log(search(n, 0, n.length, 10))