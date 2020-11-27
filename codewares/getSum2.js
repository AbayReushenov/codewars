function getSum(a, b) {
  return Array.from({ length: b >= a ? b - a + 1 : a - b + 1 }, (_, i) => b >= a ? i + a : i + b).reduce((a, b) => a + b, 0)
}

console.log(getSum(4, -15));
