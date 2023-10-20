function reduce(array, callback, initialValue) {
  let value = initialValue
  
  for(const item of array) {
    value = callback(value, item)
  }

  return value
}

const grades = [10, 6.5, 8, 6.2, 8, 10, 6, 7.5]

const sum = (accumulator, value) => accumulator + value

const total = reduce(grades, sum, 0)

console.log(`The grade average is: ${total / grades.length}`)