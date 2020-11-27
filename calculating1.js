const [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
] = Array.from({ length: 10 }).map((item, i) => ((f) => f ? f(i) : i));

const [
  plus,
  minus,
  times,
  dividedBy
] = ['+', '-', '*', '/'].map(op => Function('b', `return a => a ${op} b`));

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
