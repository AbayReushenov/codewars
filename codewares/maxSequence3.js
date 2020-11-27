const maxSequence = (a, sum = 0) => a.reduce((max, v) => Math.max(sum = Math.max(sum + v, 0), max), 0);

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 40]));
// should be 41: 
console.log(maxSequence([]));
// should be 0: []
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
// should be 0: [-2, -1, -3, -4, -1, -2, -1, -5, -4]
// false
// 6
// true
// 0
// true
// 0
