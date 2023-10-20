const Book = function BookClass(name, price) {
  this.name = name
  this.price = price
}

const books1 = [
  new Book("PHP", 15),
  new Book("Javascript", 25),
  new Book("Java", 30),
  new Book("Go", 45),
  new Book("Elixir", 50),
]

const books2 = [
  new Book("Python", 20),
  new Book("Rust", 22),
  new Book("Ruby", 28),
  new Book("C#", 33),
  new Book("C++", 35),
  new Book("Scala", 40),
]

// merge sort
function merge(array) {
  if(array.length > 1) {
    const half = Math.floor(array.length / 2)
  
    const part1 = merge(array.slice(0, half))
    const part2 = merge(array.slice(half, array.length))
    array = sort(part1, part2)
  }

  return array
}

function sort(list1, list2) {
  let arr = []
  
  while (list1.length > 0 || list2.length > 0) {
    if((list1[0]?.price ?? Infinity) < (list2[0]?.price ?? Infinity)) {
      arr.push(list1.shift())
    } else {
      arr.push(list2.shift())
    }
  }

  return arr
}

console.log(merge([...books1, ...books2]))