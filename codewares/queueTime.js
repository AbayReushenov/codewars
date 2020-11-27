function queueTime(customers, n) {
  let checkout = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let min = Math.min(...checkout);
    let index = checkout.indexOf(min);
    checkout[index] += customers[i];
  }
  return Math.max(...checkout);
}

console.log(queueTime([1, 20, 3, 10, 5, 20, 3], 4))
console.log(queueTime([], 4))

// let min = Math.min(a, b),
// max = Math.max(a, b);
