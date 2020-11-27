function queueTime(customers, registers) {
  let arr = [];

  for (let i = 0; i < registers; i++)
    arr[i] = 0;

  for (let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return arr[arr.length - 1];
}

console.log(queueTime([1, 20, 3, 10, 5, 20, 3], 4))
console.log(queueTime([], 4))

// let min = Math.min(a, b),
// max = Math.max(a, b);
