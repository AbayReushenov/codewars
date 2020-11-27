var maxSequence = function (arr) {
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    // console.log(i, arr[i], sum, min, ans)
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
    console.log(`i = ${i}, arr[i] ${arr[i]}, sum ${sum}, min${min}, answer ${ans}`)
  }
  return ans;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 40]));
// should be 41:
// console.log(maxSequence([]));
// should be 0: []
// console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
// should be 0: [-2, -1, -3, -4, -1, -2, -1, -5, -4]
// false
// 6
// true
// 0
// true
// 0
