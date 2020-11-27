function getSum(a, b) {
  let sum = 0,
    first = a,
    last = b;
  if (first > last) {
    first = b;
    last = a;
  }
  for (first; first <= last; first++) {
    sum += first;
  }
  return (sum);
}

console.log(getSum(4, 14)); // 99
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
