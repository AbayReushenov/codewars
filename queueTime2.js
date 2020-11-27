function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  customers.forEach((customer) => {
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });
  return Math.max(...tills);
}

console.log(queueTime([1, 20, 3, 10, 5, 20, 3], 4))
console.log(queueTime([], 4))

// let min = Math.min(a, b),
// max = Math.max(a, b);
