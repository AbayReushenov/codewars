function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

console.log(queueTime([1, 20, 3, 10, 5, 20, 3], 4))
console.log(queueTime([], 4))

// let min = Math.min(a, b),
// max = Math.max(a, b);
