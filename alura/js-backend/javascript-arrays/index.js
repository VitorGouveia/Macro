function pipe(initialValue) {
  const pipeObj = {
    value: initialValue,
    pipe: function (callback) {
      this.value = callback(this.value);

      return this;
    },
  };

  return pipeObj;
}

const grades = [10, 6.5, 8];

const average = (array) => array.reduce((a, b) => a + b) / array.length;

const avg = pipe(grades)
  .pipe(arr => {
    arr.push(7.5)
    
    return arr
  })
  .pipe(average)

console.log(avg.value);