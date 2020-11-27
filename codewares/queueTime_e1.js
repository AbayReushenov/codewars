const queueTime = (customers, n) => {
  if (customers.length === 0) {
    return 0;
  }
  const magazin = {};
  for (let i = 0; i < n; i++) {
    magazin[i] = 0;
  }

  for (let i = 0; i < customers.length; i++) {
    const min = Math.min(...Object.values(magazin));
    for (const key in magazin) {
      if (magazin[key] === min) {
        magazin[key] += customers[i];
        break;
      }
    }
  }
  return Math.max(...Object.values(magazin));
};

console.log(queueTime([1, 20, 3, 10, 5, 20, 3], 4))
console.log(queueTime([], 4))

// let min = Math.min(a, b),
// max = Math.max(a, b);
