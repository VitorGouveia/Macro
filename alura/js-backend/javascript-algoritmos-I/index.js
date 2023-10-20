const Book = function BookClass(name, price) {
  this.name = name
  this.price = price
}

const books = [
  new Book("Javascript", 25),
  new Book("PHP", 15),
  new Book("Java", 30),
  new Book("Elixir", 50),
  new Book("Go", 45),
  new Book("Python", 20),
]

// bubble
function sort(arr, n = arr.length) {
  if(n == 1) {
    return arr
  }
  
  for(let i = 0; i < n; i++) {
    const item = arr[i]
    const nextItem = arr[Math.min(i + 1, n - 1)]

    if(item.price < nextItem.price) {
      arr[i] = nextItem;
      arr[i + 1] = item; 
    } else {
      continue
    }
  }
  
  return sort(arr, n - 1)
}

console.log(sort(books))