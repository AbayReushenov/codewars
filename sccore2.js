function score(dice) {
  var dc = [0, 0, 0, 0, 0, 0];
  var tdr = [1000, 200, 300, 400, 500, 600];
  var sdr = [100, 0, 0, 0, 50, 0];
  dice.forEach(function (x) { dc[x - 1]++; });
  return dc.reduce(function (s, x, i) {
    return s + (x >= 3 ? tdr[i] : 0) + sdr[i] * (x % 3);
  }, 0);
}

console.log(score([2, 4, 4, 5, 4]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([1, 1, 1, 1, 1]));
console.log(score([5, 1, 1, 4, 4]));
