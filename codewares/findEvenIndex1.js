const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([11, 10, 11])); // 1
console.log(findEvenIndex([])); // -1
console.log(findEvenIndex([-1, -10, -34])); // -1

