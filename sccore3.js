let score = (a, b = {
  111: 10,
  1: 1,
  5: .5,
}) =>
  (a.sort().join('').match(/(\d)\1{2}|[15]/g) || []).reduce((c, d) =>
    c + (b[d] || d[0]) * 1e2, 0);

console.log(score([2, 4, 4, 5, 4]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([1, 1, 1, 1, 1]));
console.log(score([5, 1, 1, 4, 4]));
