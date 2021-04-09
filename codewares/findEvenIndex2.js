function findEvenIndex(arr) {
  var left = 0, right = arr.reduce(function (pv, cv) { return pv + cv; }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([11, 10, 11])); // 1
console.log(findEvenIndex([])); // -1
console.log(findEvenIndex([-1, -10, -34])); // -1

