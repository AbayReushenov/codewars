['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  .forEach(function (name, n) {
    this[name] = function (f) { return f ? f(n) : n }
  });

function plus(n) { return function (a) { return a + n } }
function minus(n) { return function (a) { return a - n } }
function times(n) { return function (a) { return a * n } }
function dividedBy(n) { return function (a) { return a / n } }

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
